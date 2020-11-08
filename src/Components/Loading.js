import React,{Component} from "react";
import img_loading from "./img/loading.gif";
import "./style.css";

class Loading extends Component{
    render(){
        return(
            <div class="preloader">
                <div class="loading">
                    <img src={img_loading} alt="" />
                    <p>Harap Tunggu</p>
                </div>
            </div>
        );
    }
}

export default Loading;