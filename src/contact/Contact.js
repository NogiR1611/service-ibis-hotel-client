import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import instagram from "../Components/img/instagram.png";
import facebook from "../Components/img/facebook.png";
import twitter from "../Components/img/twitter.png";
import gif_loading from "../Components/img/loading_button.gif";
import PesanService from "./pesan.service";
import SuccessMessages from "../Components/Successmessages";
import ErrorMessages from "../Components/Errormessages";
import "../Components/style.css";

class Contact extends Component{
        state = {
            name : "",
            email : "",
            password : "",
            c_password : "",
            alert_messages : "",
            isLoading : false
        }

    postMessageClient = (event) => {
        event.preventDefault();
        const data = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            c_password : this.state.c_password
        };

        console.log(this.state.name,this.state.email);
        
        PesanService.create(data)
        .then( res => {
            this.setState({alert_messages : "sukses",isLoading : true })
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        })
        .catch(err => {
            this.setState({alert_messages : "gagal",isLoading : true })
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        });
        /*
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: 'http://localhost:8000/inbox/kirim',
            dataType : 'json',
            type: 'POST',
            data: {
                data : data,
                _token : $('meta[name="csrf-token"]').attr('content')
            },
            success:function() {
                this.setState({alert_messages : "sukses"})
            },
            error:function(){
                this.setState({alert_messages : "gagal"})
            }
            */
    }

    render(){
        const {name,email,password,c_password,isLoading,alert_messages} = this.state;
        return(
            <React.Fragment>
                <Header />
                <div id="descript-contact">
                    <h3>Silahkan hubungi kami yah</h3>
                    <p>
                        Bila anda memiliki ulasan berupa pujian,saran maupun keluhan
                        seputar layanan maupun fasilitas
                        yang diberikan kami,Silahkan hubungi kontak kami.
                    </p>
                </div>
                <div id="contact">
                    {alert_messages === "sukses"?<SuccessMessages />:null}
                    {alert_messages === "gagal"?<ErrorMessages />:null}
                    <form onSubmit={event => this.postMessageClient(event)}>
                        <label>Nama : </label><br />
                        <input type="text"
                            name="nama_kontak"
                            value={name}
                            onChange={event => this.setState({name : event.target.value})}
                            required="required"
                        /><br />
                        <label>email anda : </label><br />
                        <input type="email"
                            name="email"
                            value={email}
                            onChange={event => this.setState({email : event.target.value})}
                            placeholder="Contoh:example@gmail.com"
                            required="required"
                        /><br/>
                        {/*}}
                        <label>Pesan : </label><br />
                        <textarea
                            cols="40"
                            rows="5"
                            name="pesan"
                            value={pesan}
                            onChange={event => this.setState({pesan : event.target.value})}
                            placeholder="Silahkan isi pesan anda disini"
                            required="required">
                        </textarea><br />
                        */}
                        <label>Password Anda : </label><br />
                        <input type="password"
                            name="password"
                            value={password}
                            onChange={event => this.setState({password : event.target.value})}
                            required="required"
                        /><br />
                        <label>Konfirmasi Password Anda : </label><br />
                        <input type="password"
                            name="c_password"
                            value={c_password}
                            onChange={event => this.setState({c_password : event.target.value})}
                            required="required"
                        /><br/>
                        <button className="klik_send_contact" type="submit" disabled={isLoading}>
                            {isLoading && (
                                <img src={gif_loading} style={{ width : "30px",height:"30px"}} className="loading" alt="" />
                            )}
                            {isLoading}
                            {!isLoading && <span>Kirim</span>}
                        </button>
                    </form>
                </div>
                <div id="big-horizontal-border" />
                <div className="menu-contact">
                    <ul>
                        <h3>Atau silahkan hubungi kontak di bawah ini</h3>
                        <li><p>Tel: +622282602020</p></li>
                        <li><p>Faks: (+62)22/82601896</p></li>
                        <li><p>Email: H9397-RE@accor.com</p></li>
                    </ul>
                    <div id="menu-sosmed">
                        <h3>Follow our social media</h3>
                        <a href="https://www.instagram.com/ibisbandungpasteur/"><img src={instagram} className="" alt="" /></a>
                        <a href="https://web.facebook.com/ibisBandungPasteur/"><img src={facebook} className="" alt="" /></a>
                        <a href="https://twitter.com/ibisBDGpasteur"><img src={twitter} className="" alt="" /></a>
                    </div>
                </div>
            <Footer />
        </React.Fragment>
        );
    }
}

export default Contact;