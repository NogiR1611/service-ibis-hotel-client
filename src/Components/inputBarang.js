import React,{Component} from "react";
import "./style.css";

class InputBarang extends Component{
    render(){
        return(
            <div class="request-list">
                <h1>List titipan barang</h1>
                <form action="list_barang.html" method="POST">
                    <label>{this.props.labelTitipanBarang}</label><br />
                    <input type="number" name="jumlah_barang" onChange={this.props.handleChange} />
                    <button type="button" onClick={this.props.list_jumlah}>Oke</button>
                </form>
            </div>
        );
    }
}

export default InputBarang;