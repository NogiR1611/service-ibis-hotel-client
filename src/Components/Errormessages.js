import React,{Component} from "react";

export default class ErrorMessages extends Component{
    render(){
        return (
        <React.Fragment>
        <div class="alert alert-danger" role="alert">
            Pesan gagal terkirim
        </div>
        </React.Fragment>       
        );
    }
}