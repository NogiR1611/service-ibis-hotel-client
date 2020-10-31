import React,{Component} from "react";
import bedroom from "./Components/img/bedroom.png";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import cleaningService from "./Components/img/cleaning-service.png";
import restaurant from "./Components/img/restaurant.png";
import wifi from "./Components/img/wifi.png";
import parking from "./Components/img/parking.png";
import roomService from "./Components/img/room-service.png";
import "./Components/style.css";

class About extends Component{
    render(){
        const title = {
            "text-align" : "center",
            "margin" : "10px 0px"
        };

        return(
            <React.Fragment>
                <Header />
                <h1 style={title}>Tentang Kami</h1>
                <div className="About">
                    <div className="spesification">
                        <div className="built-years">
                            <h4><b>Tahun Dibuat : </b></h4>
                            <span>2014</span>
                        </div>
                        <div className="bedroom">
                            <img src={bedroom} alt="" />
                            <span class="amount-bedroom"><b>Jumlah Kamar</b> : 147</span>
                        </div>
                        <div className="facility">
                            <div className="img-facility">
                                <img src={cleaningService} alt="" />
                                <img src={restaurant} alt="" />
                                <img src={wifi} alt="" />
                                <img src={parking} alt="" />
                                <img src={roomService} alt="" />
                            </div>
                            <div className="descript-facility">
                                <span><b>Cleaning Service</b></span>
                                <span><b>Restaurant</b></span>
                                <span><b>Wifi</b></span>
                                <span><b>Parking</b></span>
                                <span><b>Room Service</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="info-hotel">
                        <h3 style={title}>Profil</h3>
                        <p>
                        Ibis Bandung Pasteur terletak di kawasan strategis,
                        dekat dengan jalan layang Pasupati merupakan pilihan terbaik bagi Anda yang ingin menikmati kenyamanan dan kemudahan selama berlibur.
                        Hotel bintang 3 ini menawarkan layanan profesional dan fasilitas mumpuni dengan harga terjangkau.
                        Ibis Bandung Pasteur menyediakan 147 kamar yang dilengkapi dengan AC, TV, safety box, dan WiFi.
                        Tersedia pula pasta gigi, sabun, sampo, handuk, hair dryer, dan shower cap di setiap kamar mandi.
                        Untuk menunjang kenyamanan, Ibis Bandung Pasteur menyediakan sejumlah layanan dan fasilitas pendukung,
                        seperti layanan kamar, petugas kebersihan, restoran, kedai kopi, kamar bebas rokok, dan tempat parkir.
                        Hotel ini berjarak sangat dekat dengan Taman Film, yakni 7 menit berkendara.
                        Bagi Anda yang ingin menikmati suasana santai dan menyatu dengan alam, Forest Walk Babakan Siliwangi dapat dijadikan sebagai pilihan.
                        Destinasi terbaru Kota Kembang ini dapat ditempuh dengan berkendara selama 6 menit.
                        Selain destinasi wisata, hotel ini pun dekat dengan sejumlah pusat perbelanjaan, seperti Paris Van Java, BTC Fashion Mall, Istana Plaza, dan Cihampelas Walk yang berjarak sekitar 2-6 menit berkendara.
                        Dari Stasiun Bandung, Ibis Bandung Pasteur dapat dijangkau dengan berkendara selama 10 menit, sedangkan dari Stasiun Kiaracondong waktu yang dibutuhkan sekitar 14 menit berkendara.
                        Sementara dari Bandara Husein Sastranegara, hotel ini dapat dicapai dengan berkendara selama 9 menit.
                        </p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;