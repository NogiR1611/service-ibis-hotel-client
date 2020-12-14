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
import meeting from "./Components/img/event.png";
import wisata from "./Components/img/wisata.png";
import promosi from "./Components/img/promotion.png";
 
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
                    <div className="slider-home carousel slide" data-ride="carousel" id="carouselExampleControls">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        </ol>
                        <div className="slides-home carousel-inner">
                            <div className="sliding-home carousel-item active" data-interval="4000">
                                <img src={building} className="d-block w-100" alt="" />
                            </div>
                            <div className="sliding-home carousel-item" data-interval="4000">
                                <img src={breakfast} className="d-block w-100" alt="" />
                            </div>
                            <div className="sliding-home carousel-item" data-interval="4000">
                                <img src={eatingroom} className="d-block w-100" alt="" />
                            </div>
                            <div className="sliding-home carousel-item" data-interval="4000">
                                <img src={meetingroom} className="d-block w-100" alt="" />
                            </div>
                            <div className="sliding-home carousel-item" data-interval="4000">
                                <img src={sleepingroom} className="d-block w-100" alt="" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div id="big-horizontal-border" />
                <section id="col-fitur">
                    <div className="fitur" id="promosi">
                        <Link to="/List-Promosi">
                            <h3>Promosi yang Kami adakan Saat ini</h3>
                            <img src={promosi} alt="" />
                            <p>
                                Dapatkan promosi besar-besaran yang kami
                                adakan yuk Kapan lagi coba <span role="img" aria-label="emoji">&#128513;</span>
                            </p>
                        </Link>
                    </div>
                    <div className="fitur" id="wisata">
                        <Link to="/List-wisata">
                            <h3>Tempat Wisata terdekat di Kota Bandung</h3>
                            <img src={wisata} alt="" />
                            <p>
                                Ketahui beragam tempat wisata unik dan menarik di seluruh bandung
                            </p>
                        </Link>
                    </div>
                    <div className="fitur" id="paket_meeting">
                        <Link to="/Paket-meeting">
                            <h3>Paket Meeting yang Kami sediakan untuk Anda</h3>
                            <img src={meeting} alt="" />
                            <p>
                                Gunakan Paket Pertemuan kami dengan budget minim dan banyak fasilitas
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