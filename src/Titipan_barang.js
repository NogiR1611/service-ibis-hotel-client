import React,{Component} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

class titipanBarang extends Component{
    render(){
        return(
            <div>
                <Header />
                <div class="request-list">
                    <h1>List titipan barang</h1>
                    <form action="list_barang.html" method="POST">
                        <label>Berapa banyak barang yang mau anda titip?</label><br />
                        <input type="number" id="jumlah_barang" name="jumlah_barang" />
                        <button type="button" onclick="list_jumlah()">Oke</button>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default titipanBarang;