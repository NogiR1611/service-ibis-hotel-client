import React,{Component} from "react";
import Header from "../Components/Header";
import ListPage from "../Components/ListPage";
import Footer from "../Components/Footer";
import Deskripsi from "../Components/Deskripsi";
import "../Components/style.css";

class ListMeeting extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className='item_page'>
                    <div className="title-item-page"> 
                        <h3>Pilihan Paket Pertemuan yang kami sediakan untuk anda</h3>
                    </div>
                    <div className='item_meeting_list'>
                        <div className="item_meeting">
                            <a href='/Paket-meeting/halfday' className='link-item'>
                                <div className='item'>
                                    <h3>Half Day Paket Meeting</h3>
                                </div>
                                <ul className='facility-meeting'>
                                    <li>1 Coffee Break IDR 70.0000 net per Pax</li>
                                    <li>1 Lunch or Dinner IDR 120.000 net per Pax</li>
                                    <li>Minimal 25 Pax</li>
                                    <li>Durasi 4-6 Jam</li>
                                    <li>1x Coffee Break</li>
                                    <li>1x Makan Siang atau Malam</li>
                                </ul>
                            </a>
                        </div>
                        <div className="item_meeting">
                            <a href='/Paket-meeting/fullday' className='link-item'>
                                <div className='item'>
                                    <h3>Full Day Paket Meeting</h3>
                                </div>
                                <ul className='facility-meeting'>
                                    <li>1 Coffee Break IDR 70.0000 net per Pax</li>
                                    <li>1 Lunch or Dinner IDR 120.000 net per Pax</li>
                                    <li>Minimal 25 Pax</li>
                                    <li>Durasi Maksimal 8 Jam</li>
                                    <li>2x coffee break</li>
                                    <li>1x Makan Siang atau Malam</li>
                                </ul>
                            </a>
                        </div>
                        <div className="item_meeting">
                            <a href='/Paket-meeting/fullboard' className='link-item'>
                                <div className='item'>
                                    <h3>Full Board Paket Meeting</h3>
                                </div>
                                <ul className='facility-meeting'>
                                    <li>1 Coffee Break IDR 70.0000 net per Pax</li>
                                    <li>1 Lunch or Dinner IDR 120.000 net per Pax</li>
                                    <li>Minimal 25 Pax</li>
                                    <li>Durasi Maksimal 1 Hari</li>
                                    <li>2x coffee break</li>
                                    <li>2x Makan Siang atau Malam</li>
                                </ul>
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