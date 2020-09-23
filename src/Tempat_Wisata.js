import React,{Component} from "react";
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
        fetch("http://localhost:4000/",{
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
                    <ul>
                        { Items.map( (element,index) =>
                        <li key={index}>{element.id}-{element.harga}-{element.nama_tempat_wisata}-{element.lokasi}-{element.deskripsi}</li>)}
                    </ul>
                </div>
                <Footer />
            </container>
        );
    }
}

export default TempatWisata;