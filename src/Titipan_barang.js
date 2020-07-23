import React,{Component} from "react";
import Header from "./Components/Header";
import InputBarang from "./Components/inputBarang";
import Footer from "./Components/Footer";
import "./Components/style.css";

class titipanBarang extends Component{
    render(){
        const movePage=function(){
            window.location.href="/list-barang";
        }
        return(
            <div>
                <Header />
                <InputBarang 
                    labelTitipanBarang="Silahkan masukan jumlah barang anda"
                    list_jumlah={movePage}    
                />
                <Footer />
            </div>
        );
    }
}

export default titipanBarang;