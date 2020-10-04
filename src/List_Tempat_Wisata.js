import React,{Component} from "react";
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
            description : ""
        };
    }
    
   componentDidMount(){
        fetch("http://localhost:4000/json",{
        header : {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "*"
        }
        })
        .then(response=>response.json())
        .then(data=>this.setState({Items : data}))
    }

    render(){
        const Items = this.state.Items;
        const border_list = {
            "border" : "1px solid black"
        };
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
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListWisata;