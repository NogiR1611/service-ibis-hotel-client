import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import logoibis from "./img/logo-ibis.png";
 
class Header extends Component{
    render(){
        return(
            <header>
                <Link to="/"><img src={logoibis} alt="" /></Link>
            </header>
        );
    }
}

export default Header;