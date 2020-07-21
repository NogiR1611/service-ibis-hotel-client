import React,{Component} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";


class listBarang extends Component{
    render(){
        return(
            <div>
                <Header/>
                <section>
                    <div class="request-list">
                        <h1>List titipan barang</h1>
                        <form>
                            <label>Silahkan isi nama barang anda di bawah ini</label><br />
                            <div id="input-list"></div>
                            <button onClick="">Oke</button>
                        </form>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default listBarang;