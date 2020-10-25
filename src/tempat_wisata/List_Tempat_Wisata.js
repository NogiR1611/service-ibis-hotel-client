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
            description : ""
        };
    }
    
   componentDidMount(){
        this.fetchListWisata();
    }

    /*
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
    */
 
    fetchListWisata = () => {
        ListWisataService.getAll()
        .then(response => {
            const {data} = response.data;
            this.setState({
                Items : data
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
        const color_date={
            "color" : "#292b29"
        };
        const border_list = {
            "border" : "1px solid black"
        };
       let Items = this.state.Items;

        return(
            <React.Fragment>    
                <Header />
                <ListPage 
                    title="Tempat Wisata Terpopuler di Wilayah Bandung dan sekitarnya"
                    list_item={Items.map( (element,index) =>
                        <li key={index}>
                            <span style={border_list} />
                            <a href={'/tempat-wisata/' + element.id} className='link-item'>
                                <img src={'http://localhost:8000/img_wisata/' + element.urlimage} className="list-image-item" alt="" />
                                <div className='item'>
                                    <h3>{element.nama_tempat_wisata}</h3>
                                    <p><b>Harga</b> : {element.harga}</p>
                                    <p><b>Lokasi</b> : {element.lokasi}</p>
                                </div>
                                <div className='deskripsi'>
                                    <span style={color_date}>{element.createdAt}</span><Deskripsi deskripsi={element.deskripsi}/>
                                </div>
                            </a>
                        </li>
                    )}
                    onChange={this.handlePageChange}
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListWisata;