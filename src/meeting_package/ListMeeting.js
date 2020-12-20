import React,{Component} from "react";
import Header from "../Components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Footer from "../Components/Footer";
import bg1 from "../Components/img/bg/meeting1.jpg";
import bg2 from "../Components/img/bg/meeting2.jpg";
import bg3 from "../Components/img/bg/meetingroom.jpg";
import "../Components/style.css";

class ListMeeting extends Component{
    componendDidMount(){
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className='item_page' id="Bg-meeting">
                    <div className="title-item-page"> 
                        <h3>Pilihan Paket Pertemuan yang Kami Sediakan untuk Anda</h3>
                    </div>
                    <div className='item_meeting_list'>
                        <div className="item_meeting">
                            <div className='link-item'>
                                <div className='item' id='Title-meeting'>
                                    <h3>Half Day Paket Meeting</h3>
                                    <p>IDR 200.000/<span className="main-price">Pax</span></p>
                                    <span className="coret-price"><s>IDR 230.000/Pax</s></span>
                                </div>
                                <ul className='facility-meeting'>
                                    <li>Minimal 25 Pax</li>
                                    <li>Durasi 4-6 Jam</li>
                                    <li>1x Coffee Break</li>
                                    <li>1x Makan Siang atau Malam</li>
                                </ul>
                            </div>
                        </div>
                        <div className="item_meeting">
                            <div className='link-item'>
                                <div className='item' id='Title-meeting'>
                                    <h3>Full Day Paket Meeting</h3>
                                    <p>IDR 260.000/<span className="main-price">Pax</span></p>
                                    <span className="coret-price"><s>IDR 290.000/Pax</s></span>
                                </div>
                                <ul className='facility-meeting'>
                                    <li>Minimal 25 Pax</li>
                                    <li>Durasi Maksimal 8 Jam</li>
                                    <li>2x coffee break</li>
                                    <li>1x Makan Siang atau Malam</li>
                                </ul>
                            </div>
                        </div>
                        <div className="item_meeting">
                            <div href='' className='link-item'>
                                <div className='item' id='Title-meeting'>
                                    <h3>Full Board Paket Meeting</h3>
                                    <p>IDR 360.000/<span className="main-price">Pax</span></p>
                                    <span className="coret-price"><s>IDR 400.000/Pax</s></span>
                                </div>
                                <ul className='facility-meeting'>
                                    <li>Minimal 25 Pax</li>
                                    <li>Durasi Maksimal 1 Hari</li>
                                    <li>2x coffee break</li>
                                    <li>2x Makan Siang atau Malam</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="slider carousel slide" data-ride="carousel" id="carouselExampleControls">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="slides carousel-inner">
                            <div className="sliding carousel-item active" data-interval="4000">
                                <img src={bg1} alt="" />
                            </div>
                            <div className="sliding carousel-item" data-interval="4000">
                                <img src={bg2} alt="" />
                            </div>
                            <div className="sliding carousel-item" data-interval="4000">
                                <img src={bg3} alt="" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div id="big-horizontal-border" />
                    <div className="menu-contact" id="For-meeting-package">
                        <ul>
                            <h3>Bila Anda Berminat Silahkan Hubungi Kontak di Bawah ini</h3>
                            <li><p>Tel: +622282602020</p></li>
                            <li><p>Faks: (+62)22/82601896</p></li>
                            <li><p>Email: H9397-RE@accor.com</p></li>
                        </ul>
                        <div id="menu-sosmed">
                            <h3>Follow our social media</h3>
                            <a href="https://www.instagram.com/ibisbandungpasteur/">
                                <span className="margin-icon"><FontAwesomeIcon icon={['fab','instagram-square']} size="2x" color="black" /></span>
                            </a>
                            <a href="https://web.facebook.com/ibisBandungPasteur/">
                                <span className="margin-icon"><FontAwesomeIcon icon={['fab','facebook-square']} size="2x" color="black" /></span>
                            </a>
                            <a href="https://twitter.com/ibisBDGpasteur">
                                <span className="margin-icon"><FontAwesomeIcon icon={['fab','twitter-square']} size="2x" color="black" /></span>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default ListMeeting;