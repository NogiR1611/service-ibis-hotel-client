import React,{Component} from "react";
import {Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

class ListWisata extends Component{
    constructor(props){
        super(props)
        this.state = {
            Items : []
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
        return(
            <container>
                <Header />
                <div className='tempat_wisata'>
                    <h1>Tempat wisata terbaru</h1>
                    <ul className=''>
                        { Items.map( (element,index) =>
                        <li key={index}>
                            <Link to={'/Tempat-wisata/' + element.id}>
                                <img src={'http://localhost:4000/images/' + element.urlimage} className="list_img_wisata" alt="" />
                                <h4>{element.nama_tempat_wisata}</h4>
                                <p>{element.harga}</p>
                                <p>{element.lokasi}</p>
                            </Link>
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