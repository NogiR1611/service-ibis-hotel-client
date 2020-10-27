import React,{Component} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <h1>Tentang Kami</h1>
                <div className="About">
                    <div className="spesification">
                    </div>
                    <div className="info-hotel">
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