import React,{Component} from "react";
import Header from "./Components/Header";
import InputBarang from "./Components/inputBarang";
import Footer from "./Components/Footer";
import "./Components/style.css";

class titipanBarang extends Component{
    constructor(props){
        super(props)
        this.state = {
            jumlah_barang : 0,
            disabled : false,
            disabled_button:false,
            judul_list : ""

        }
        this.list_jumlah=this.list_jumlah.bind(this);
    }

    handleChange=(e)=>{
        let barang = e.target.value;
        this.setState({jumlah_barang:barang});
    }

    list_jumlah(){
        let barang = this.state.jumlah_barang;
        let judul = <span>Silahkan isi nama barang</span>
        let list_input = document.getElementById("list-nama-barang");
        let element_button = document.createElement("button");

        for (let i = 0; i<barang; i++){
            let elemen = document.createElement("input");
            let spasi = document.createElement("br");
            elemen.type = "text";
            elemen.name = "nama_barang";
            elemen.className = "input-barang";
            list_input.appendChild(elemen);
            list_input.appendChild(spasi);
        }

        element_button.className = "button-barang";
        element_button.innerHTML = "Oke";
        list_input.appendChild(element_button);

        this.setState({disabled:!this.state.disabled});
        this.setState({disabled_button:!this.state.disabled_button});
        this.setState({judul_list:judul});
    }

    render(){
        return(
            <div>
                <Header />
                <div className="request-list">
                    <h1>List titipan barang</h1>
                    <form action="list_barang.html" method="POST">
                        <label>Silahkan masukan jumlah barang</label><br />
                        <InputBarang
                            disabled={this.state.disabled}
                            handleChange={this.handleChange}
                            jumlah_barang={this.state.jumlah_barang}
                        />
                        <button
                            type="button"
                            className="button-barang"
                            onClick={this.list_jumlah}
                            disabled={this.state.disabled_button}>
                            Submit
                        </button>
                    </form>
                    {this.state.judul_list}
                    <div id="list-nama-barang" />
                </div>
                <Footer />
            </div>
        );
    }
}

export default titipanBarang;