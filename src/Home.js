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
    componentDidMount(){
        var counter = 1;
        setInterval(() => {
            document.getElementById('bg' + counter).checked=true;
            counter++;
            if(counter > 5){
                counter = 1;
            }
        },3000);
    }

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
                    <div className="slider-home">
                        <div className="slides-home">
                            <input type="radio" name="radio-btn" id="bg1" />
                            <input type="radio" name="radio-btn" id="bg2" />
                            <input type="radio" name="radio-btn" id="bg3" />
                            <input type="radio" name="radio-btn" id="bg4" />
                            <input type="radio" name="radio-btn" id="bg5" />
                            <div className="sliding-home first">
                                <img src={building} alt="" />
                            </div>
                            <div className="sliding-home">
                                <img src={breakfast} alt="" />
                            </div>
                            <div className="sliding-home">
                                <img src={eatingroom} alt="" />
                            </div>
                            <div className="sliding-home">
                                <img src={meetingroom} alt="" />
                            </div>
                            <div className="sliding-home">
                                <img src={sleepingroom} alt="" />
                            </div>
                            <div className="navigation-auto">
                                <div className="auto-bg1"></div>
                                <div className="auto-bg2"></div>
                                <div className="auto-bg3"></div>
                                <div className="auto-bg4"></div>
                                <div className="auto-bg5"></div>
                            </div>
                        </div>
                        <div className="navigation-manual">
                            <label for="bg1" className="manual-bg" />
                            <label for="bg2" className="manual-bg" />
                            <label for="bg3" className="manual-bg" />
                            <label for="bg4" className="manual-bg" />
                            <label for="bg5" className="manual-bg" />
                        </div>
                    </div>
                    {/*
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
                    */}
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

/*
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            done : undefined
        }
    }

    render(){
        return(
            <React.Fragment>
            {!this.state.done ? (
                <Loading />
            ) : (
                <Dashboard />
            )}
            </React.Fragment>
        );
    }
}
*/

export default Home;