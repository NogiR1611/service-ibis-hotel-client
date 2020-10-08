import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/style.css";

class Events extends Component{
    render(){
        return(
            <container>
                <Header />
                <Footer />
            </container>
        );
    }
}

export default Events;