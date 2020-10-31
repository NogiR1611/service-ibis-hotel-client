import React,{Component} from "react";
import {Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
                                <h1><b>Hotel yang berada di wilayah strategis</b></h1>
                            </div>
                            <div className="slide" id="breakfast">
                                <h1><b>menyajikan beragam pilihan varian sarapan untuk anda</b></h1>
                            </div>
                            <div className="slide" id="eatingroom">
                                <h1><b>Memiliki restoran yang nyaman untuk bersantai</b></h1>
                            </div>
                            <div className="slide" id="meetingroom">
                                <h1><b>Memiliki ruang meeting room untuk melakukan berbagai pertemuan</b></h1>
                            </div>
                            <div className="slide" id="sleepingroom">
                                <h1><b>Kamar tidur yang nyaman dan menyajikan indahnya pemandangan kota bandung</b></h1>
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