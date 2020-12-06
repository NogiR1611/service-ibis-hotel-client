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
            nama_kontak : "",
            email : "",
            pesan : "",
            alert_messages : "",
            isLoading : false
        }

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    postMessageClient = (event) => {
        event.preventDefault();
        const data = {
            nama_kontak : this.state.nama_kontak,
            email : this.state.email,
            pesan : this.state.pesan
        };
        
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
            url: 'http://localhost:8000/inbox/kirim',
            dataType : 'json',
            type: 'POST',
            data: data,
            success:function() {
                this.setState({isLoading:true,alert_messages : "sukses"})
                setTimeout(() => {
                    this.setState({ isLoading: false });
                }, 2000);
            }
        })
        */
    }

    render(){
        const {nama_kontak,email,pesan,isLoading,alert_messages} = this.state;
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
                            onChange={event => this.setState({nama_kontak : event.target.value})}
                            required="required"
                            value={nama_kontak}
                        /><br />
                        <label>email anda : </label><br />
                        <input type="email"
                            onChange={event => this.setState({email : event.target.value})}
                            placeholder="Contoh:example@gmail.com"
                            value={email}
                            required="required"
                        /><br/>
                        <label>Pesan : </label><br />
                        <textarea
                            cols="40"
                            rows="5"
                            value={pesan}
                            onChange={event => this.setState({pesan : event.target.value})}
                            placeholder="Silahkan isi pesan anda disini"
                            required="required">
                        </textarea><br />
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