import React,{Component} from "react";
import {Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import building from "./Components/img/sliders/building_logo.png";
import breakfast from "./Components/img/sliders/breakfast_logo.png";
import eatingroom from "./Components/img/sliders/eatingroom_logo.png";
import meetingroom from "./Components/img/sliders/meetingroom_logo.png";
import sleepingroom from "./Components/img/sliders/sleepingroom_logo.png";
import "./Components/style.css";
import event from "./Components/img/event.png";
import  wisata from "./Components/img/wisata.png";
 
class Home extends Component{
    render(){
        return(
            <section>
                <Header />
                <div className="welcome">
                    <h3>Hai,Selamat datang di ibis hotel pasteur</h3>
                </div>
                <div className="col-descript-facility">
                    <div id="review-facility">
                        <h1>Semoga anda menikmati pelayanan dan fasilitas yang kami berikan untuk anda</h1>
                    </div>
                    <div id="slider">
                        <figure>
                            <div className="slide" id="building">
                                <img src={building} alt="" />
                            </div>
                            <div className="slide" id="breakfast">
                                <img src={breakfast} alt="" />
                            </div>
                            <div className="slide" id="eatingroom">
                                <img src={eatingroom} alt="" />
                            </div>
                            <div className="slide" id="meetingroom">
                                <img src={meetingroom} alt="" />
                            </div>
                            <div className="slide" id="sleepingroom">
                                <img src={sleepingroom} alt="" />
                            </div>
                        </figure>
                    </div>
                </div>
                <div id="big-horizontal-border" />
                <section id="col-fitur">
                    <div className="fitur" id="event">
                        <Link to="/List-Event">
                            <h3>Event terkini di kota bandung</h3>
                            <img src={event} alt="" />
                            <p>
                                Ketahui beragam job fair,lomba,pameran,seminar dan workshop
                                terkini yang ada di kota bandung
                            </p>
                        </Link>
                    </div>
                    <div className="fitur" id="wisata">
                        <Link to="/List-wisata">
                            <h3>Tempat wisata terdekat di kota bandung</h3>
                            <img src={wisata} alt="" />
                            <p>
                                Ketahui beragam tempat wisata unik dan menarik di seluruh bandung
                            </p>
                        </Link>
                    </div>
                </section>
                <Footer />
            </section>
        );
    }
}

export default Home;