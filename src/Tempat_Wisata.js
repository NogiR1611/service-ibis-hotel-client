import React,{Component} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

class TempatWisata extends Component{
    render(){
        return(
            <container>
                <Header />
                <div className="">
                    <h1>Tempat wisata terbaru</h1>
                </div>
                <Footer />
            </container>
        );
    }
}

export default TempatWisata;