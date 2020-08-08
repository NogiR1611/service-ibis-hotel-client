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
            judul_list : "",
            alert : ""

        }
        this.list_jumlah=this.list_jumlah.bind(this);
    }

    handleChange=(e)=>{
        let barang = e.target.value;
        this.setState({jumlah_barang:barang});
    }

    list_jumlah(){
        let show_alert = "";
        let barang = this.state.jumlah_barang;
        let judul = <span>Silahkan isi nama barang anda</span>
        let list_input = document.getElementById("list-nama-barang");
        let element_button = document.createElement("button");

        if(!Number(barang)){
            show_alert = <div><p>Mohon isi dengan angka</p></div>
            this.setState({barang : null});
        }
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

        this.setState({alert:show_alert});
        this.setState({disabled:!this.state.disabled});
        this.setState({disabled_button:!this.state.disabled_button});
        this.setState({judul_list:judul});
    }

    render(){
        return(
            <container>
                <Header />
                <div className="bg-paper">
                    <div className="request-list">
                        <center><h1>List titipan barang</h1></center>
                        <p>
                            <b>Note </b>:Barang yang anda titip selalu kami jamin kerahasiaannya sehingga tidak akan
                            diberitahukan kepada siapapun.
                        </p>
                        <form action="list_barang.html" method="POST">
                            {this.state.alert}
                            <label>Silahkan masukan jumlah barang anda</label><br />
                            <InputBarang
                                disabled={this.state.disabled}
                                handleChange={this.handleChange}
                                jumlah_barang={this.state.jumlah_barang}
                            /><br/>
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
            </div>
            <Footer />
        </container>
        );
    }
}

export default titipanBarang;