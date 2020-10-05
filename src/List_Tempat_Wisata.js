import React,{Component} from "react";
import Pagination from "@material-ui/lab/Pagination";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

class Deskripsi extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : ""
        }
    }

    componentDidMount(){
        let req = this.props.deskripsi;
        let str = req.substr(0,300);
        this.setState({value : str});
    }

    render(){
        return(
            <p>{this.state.value} ...[]</p>
        );
    }
}

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
        fetch("http://localhost:4000/publish",params)
        .then(response => response.json())
        .then(data => {
            this.setState({
                Items : data.list_wisata,
                count : data.totalPage
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
       const {Items,page,pageSize,count} = this.state;
        return(
            <React.Fragment>    
                <Header />
                <div className='item_page'>
                    <h1>Tempat wisata terbaru di wilayah bandung dan sekitarnya</h1>
                    <ul className='item_list'>
                        { Items.map( (element,index) =>
                        <li key={index}>
                            <span style={border_list}></span>
                            <a href={'/Tempat-wisata/' + element.id} className='link-item'>
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
                            <span style={border_list}></span>
                        </li>
                        )}
                    </ul>
                    <Pagination count={count} page={page} onChange={this.handlePageChange} variant="outlined" shape="rounded" />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListWisata;