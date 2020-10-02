import React,{Component} from "react";
import {Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

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

        let bawa = document.getElementById("Deskripsi").innerHTML;
        let str = bawa.substr(0,50);
        let wow = document.getElementById("hasil").innerHTML = str;
        this.setState({description : wow});
    }

    render(){
        const Items = this.state.Items;
        const border_list = {
            "border" : "1px solid black"
        };
        const none_description = {
            "display" : "none"
        }

        return(
            <container>
                <Header />
                <div className='item_page'>
                    <h1>Tempat wisata terbaru</h1>
                    <ul className='item_list'>
                        { Items.map( (element,index) =>
                        <li key={index}>
                            <span style={border_list}></span>
                            <Link to={'/Tempat-wisata/' + element.id}>
                                <img src={'http://localhost:4000/images/' + element.urlimage} className="list-image-item" alt="" />
                                <div className='item'>
                                    <h3>{element.nama_tempat_wisata}</h3>
                                    <p><b>Harga</b> : {element.harga}</p>
                                    <p><b>Lokasi</b> : {element.lokasi}</p>
                                </div>
                                <div className='deskripsi'>
                        <p><span id='Deskripsi' style={none_description}>{element.deskripsi}</span><span id="hasil">{this.state.description}</span>...[]</p>
                                </div>
                            </Link>
                            <span style={border_list}></span>
                        </li>
                        )}
                    </ul>
                </div>
                <Footer />
            </container>
        );
    }
}

export default ListWisata;