import React,{Component} from "react";
import Header from "./Components/Header";
import InputBarang from "./Components/inputBarang";
import Footer from "./Components/Footer";
import "./Components/style.css";


class listBarang extends Component{
    constructor(props){
        super(props)
        this.state = {
            jumlah_barang : 0            
        }
        this.list_jumlah=this.list_jumlah.bind(this);
    }

    handleChange=(e)=>{
        let barang = e.target.value;
        this.setState({jumlah_barang:barang});
    }

    list_jumlah(){
        let barang = this.state.jumlah_barang;
        let list_input = document.getElementById("test");

        for (let i = 0; i<barang; i++){
            let elemen = document.createElement("input");
            let spasi = document.createElement("br");
            elemen.type = "text";
            list_input.appendChild(elemen);
            list_input.appendChild(spasi);
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <InputBarang
                    labelTitipanBarang="silahkan masukan nama barang-barang anda"
                    jumlah_barang={this.state.jumlah_barang}
                    handleChange={this.handleChange}
                    list_jumlah={this.list_jumlah}
                />
                <Footer/>
            </div>
        );
    }
}

export default listBarang;