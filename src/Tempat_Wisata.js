import React,{Component} from "react";
import {Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

class TempatWisata extends Component{
    constructor(props){
        super(props)
        this.state = {
            Items : []
        };
    }
    /*
    componentDidMount(){
        fetch('http://127.0.0.1:4000/list')
        .then(res => res.text())
        .then(data => this.setState({ Items : data}))
    }
    */
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
                <div>
                    <h1>Tempat wisata terbaru</h1>
                    <ul class="">
                        { Items.map( (element,index) =>
                        <li key={index}>
                            <Link to="">
                                <img src={element.urlimage} alt="" />
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

export default TempatWisata;