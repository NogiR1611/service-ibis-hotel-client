import React,{Component} from "react";
import "./style.css";
import logoibis from "./img/logo-ibis.png";

class Header extends Component{
    render(){
        return(
            <header>
                <a href="./index.html"><img src={logoibis} alt="" /></a>
            </header>
        );
    }
}

export default Header;