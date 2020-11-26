import React,{Component} from "react";
import Header from "../Components/Header";
import ListPage from "../Components/ListPage";
import Footer from "../Components/Footer";
import Deskripsi from "../Components/Deskripsi";
import Axios from "axios";

class ListWisata extends Component{
    constructor(props){
        super(props)
        this.state = {
            Items : [],
            isNull : false,
            description : "",
            activePage : 0,
            itemCountPerPage : 0,
            totalItemsCount : 0,
            pageRangeDisplayed : 5,
            Description : ""
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
        /*
        const {page, pageSize} = this.state;
        const params = this.getRequestParams(page, pageSize);
        */

        Axios.get('http://localhost:8000/wisata/pagination?page=' + this.state.activePage)
        .then(response => {
            const {data,current_page,per_page,total} = response.data;
            this.setState({
                Items : data,
                activePage : current_page,
                itemsCountPerPage : per_page,
                totalItemsCount : total 
            });

            if(data === null){
                this.setState({ isNull : true });
            }
        })
        .catch((err) =>{
            console.log(err)
        });
    }

    /*
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
    */
    render(){
        const color_date={
            "color" : "#292b29"
        };
        const border_list = {
            "border" : "1px solid black"
        };
       let {Items,isNull} = this.state;

        return(
            <React.Fragment>    
                <Header />
                {isNull === true ?
                <p>Kosong</p>:
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
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                />}
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListWisata;