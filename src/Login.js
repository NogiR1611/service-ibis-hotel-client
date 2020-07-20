import React,{Component} from "react";
import "./Components/style.css";
import google_icon from "./Components/img/new-google-favicon-logo.png";
import facebook_icon from "./Components/img/facebook.png";

class Login extends Component{
    render(){
        return(
            <section>
                <div className="signin-and-signup">
                    <div id="bg-login" />
                    <div id="login">
                        <h1>Login</h1>
                        <label>Masukan nomor telepon atau email anda</label>
                        <input type="text" alt="" />
                        <div id="form-border"></div>
                        <button className="button-signin-and-signup" onclick="">Login</button>
                        <h4>Atau masuk dengan</h4>
                        <a className="api-login" href=""><img src={google_icon} className="button-api-login" alt="" />Google</a>
                        <a className="api-login" href=""><img src={facebook_icon} className="button-api-login" alt="" />Facebook</a>
                        <h4>Belum punya akun?<a href="">Daftar</a></h4>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;