import React,{Component} from "react";
import ListWisataService from "./list_wisata.service";
import Header from "../Components/Header";
import ListPage from "../Components/ListPage";
import Footer from "../Components/Footer";
import Deskripsi from "../Components/Deskripsi";

class ListWisata extends Component{
    constructor(props){
        super(props)
        this.state = {
            Items : [],
            page : 1,
            count : 0,
            pageSize : 3,
            description : ""
        };
    }
    
   componentDidMount(){
        this.fetchListWisata();
    }

    getRequestParams = (page,pageSize) =>{
        let params = {};

        if(page){
            params["page"] = page - 1;
        }
        if(pageSize){
            params["pageSize"] = pageSize;
        }

        return params;
    }
 
    fetchListWisata = () => {
        const {page,pageSize} = this.state;
        const params = this.getRequestParams(page,pageSize);
        
        ListWisataService.getAll(params)
        .then(response => {
            const {list_wisata,totalPage} = response.data;
            this.setState({
                Items : list_wisata,
                count : totalPage
            });
        })
        .catch((err) =>{
            console.log(err)
        });
    }

    handlePageChange = (event,value) => {
        this.setState(
        {
            page : value
        },
        () => {
            this.fetchListWisata();
        }
    )
    }

    render(){
        const border_list = {
            "border" : "1px solid black"
        };
       const {Items,count,page} = this.state;
        return(
            <React.Fragment>    
                <Header />
                <ListPage 
                    title="Tempat Wisata Terpopuler di Wilayah Bandung dan sekitarnya"
                    list_item={Items.map( (element,index) =>
                        <li key={index}>
                            <span style={border_list} />
                            <a href={'/tempat-wisata/' + element.id} className='link-item'>
                                <img src={'http://localhost:4000/images/' + element.urlimage} className="list-image-item" alt="" />
                                <div className='item'>
                                    <h3>{element.nama_tempat_wisata}</h3>
                                    <p><b>Harga</b> : {element.harga}</p>
                                    <p><b>Lokasi</b> : {element.lokasi}</p>
                                </div>
                                <div className='deskripsi'>
                                    <Deskripsi deskripsi={element.deskripsi}/>
                                </div>
                            </a>
                            <span style={border_list} />
                        </li>
                    )}
                    count={count}
                    page={page}
                    onChange={this.handlePageChange}
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListWisata;