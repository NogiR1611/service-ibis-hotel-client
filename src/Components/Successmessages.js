import React,{Component} from "react";

export default class SuccessMessages extends Component{
    render(){
        return (
        <React.Fragment>
        <div class="alert alert-success" role="alert">
            Pesan berhasil terkirim
        </div>
        </React.Fragment>       
        );
    }
}