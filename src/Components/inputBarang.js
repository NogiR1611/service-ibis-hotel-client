import React from "react";
import "./style.css";

const InputBarang = props => (
    <input
        type="number"
        disabled={props.disabled}
        name={props.jumlah_barang}
        onChange={props.handleChange}
    />
)

export default InputBarang;