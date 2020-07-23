import React,{Component} from "react";
import Header from "./Components/Header";
import InputBarang from "./Components/inputBarang";
import Footer from "./Components/Footer";
import "./Components/style.css";

class titipanBarang extends Component{
    render(){
        return(
            <div>
                <Header />
                <InputBarang
                    labelTitipanBarang="Silahkan masukan jumlah barang anda"
                    handleChange={this.props.handleChange}
                    list_jumlah={this.props.list_jumlah}
                />
                <div id="test"></div>
                <Footer />
            </div>
        );
    }
}

export default titipanBarang;