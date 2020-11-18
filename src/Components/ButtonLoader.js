import React, { Component } from "react";
import gif_loading from "./img/loading_button.gif";
import "./style.css";

export default class ButtonLoader extends Component {
  render() {
    return (
        <button className="klik_send_contact" disabled={this.props.loading} type="submit">
            {this.props.loading && (<img src={gif_loading} className="loading" alt="" />)}
            {this.props.loading && <span>{this.props.text_loading}</span>}
            {!this.props.loading && <span>{this.props.text}</span>}
        </button>
    );
  }
}
