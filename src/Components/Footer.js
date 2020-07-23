import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./style.css";

class Footer extends Component{
    render(){
        const hearts = {
            color: "#fc3f5e",
            fontSize:"15px"
        };
        let time = new Date();
        let years = time.getFullYear();
        
        return(
            <footer>
                <div class="top-footer">
                    <p>
                        <Link to="">privacy policy</Link>
                        <span id="mini-vertical-border"></span>
                        <Link to="">about us</Link>
                        <span id="mini-vertical-border"></span>
                        <Link to="/contact">contact us</Link>
                    </p>
                </div>
                <div class="middle-footer">
                    <div id="left-middle-footer">
                        <Link to="https://goo.gl/maps/DKHRMJyk9mtuZPuJA">
                            <p>
                                Jl. Dr. Djunjunan No.22<br />
                                Sukabungah, Kec. Sukajadi<br />
                                Kota Bandung, Jawa Barat<br />
                                40162
                            </p>
                        </Link>
                    </div>
                    <div id="right-middle-footer">
                        <ul>
                            <li><p>Tel: +622282602020</p></li>
                            <li><p>Faks: (+62)22/82601896</p></li>
                            <li><p>Email kontak : H9397-RE@accor.com</p></li>
                        </ul>
                    </div>
                </div>
                <div id="big-horizontal-border"></div>
                <div class="bottom-footer">
                    <p>&copy; Ibis Hotel {years} Made by nogi with <span style={hearts}>&hearts;</span></p> 
                </div>
            </footer>
        );
    }
}

export default Footer;