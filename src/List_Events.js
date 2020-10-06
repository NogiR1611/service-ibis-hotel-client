import React,{Component} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Pagination from "@material-ui/lab/Pagination";
import "./Components/style.css";

class ListEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="item-page">
                    <h1>Event terbaru yang akan diadakan di Kota Bandung</h1>
                    <ul className="item-list">

                    </ul>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}