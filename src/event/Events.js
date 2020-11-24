import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/style.css";
import lokasi from "../Components/img/location.png";
import tanggal from "../Components/img/date.png";
import waktu from "../Components/img/time.png";
import harga from "../Components/img/price.png";
import email from "../Components/img/email.png";
import nomor from "../Components/img/telephone.png";
import gmap from "../Components/img/gmap.png";
import Shimmer from "react-shimmer-effect";

class DeskripsiEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : [],
            isLoading : false
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:8000/event/json/${id}`,{
            headers : {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            method : 'GET'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({Data : data,isLoading : true })
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        })
        .catch(err => console.log(err))
    }

    render(){
        let {Data,isLoading} = this.state;
        return(
            <React.Fragment>
                <Header />
                <div className="Item-styling">
                    <h1><b>Events Yang akan di adakan di Kota Bandung</b></h1><br/>
                    <h1>{Data.nama_event}</h1>
                    <div className="update">
                        <span>Update : </span><br/>
                        <span>{Data.updatedAt}</span>
                    </div>
                    <div className="img-and-facility">
                        <div id="Img-Item">
                            {isLoading && (
                                <Shimmer>
                                    <div className={"image-item"}/>
                                </Shimmer>
                            )}
                            {isLoading}
                            {!isLoading && <img src={'http://localhost:8000/img_event/' + Data.foto} className="image-item" alt="" />}
                        </div>
                        <div id="Location-Item">
                            <div className="lokasi-item" id="Lokasi">
                                <img src={lokasi} alt="" />
                                <span><b>Lokasi : </b></span>
                                <span>{Data.tempat}</span>
                            </div>
                            <div className="lokasi-item" id="Tanggal">
                                <img src={tanggal} alt="" />
                                <span><b>Tanggal : </b></span>
                                <span>{Data.tanggal}</span>
                            </div>
                            <div className="lokasi-item" id="Waktu">
                                <img src={waktu} alt="" />
                                <span><b>Waktu : </b></span>
                                <span>{Data.waktu}</span>
                            </div>
                            <div className="lokasi-item" id="Harga">
                                <img src={harga} alt="" />
                                <span><b>Harga : </b></span>
                                <span>{Data.harga}</span>
                            </div>
                            <div className="lokasi-item" id="Map">
                                <img src={gmap} alt="" />
                                <span><b>Lihat Map : </b></span>
                                <span></span>
                            </div>
                            <div className="lokasi-item" id="Email">
                                <img src={email} alt="" />
                                <span><b>Email : </b></span>
                                <span>{Data.email}</span>
                            </div>
                        <div className="lokasi-item" id="Nomor">
                            <img src={nomor} alt="" />
                            <span><b>Nomor : </b></span>
                            <span>{Data.nomor}</span> 
                        </div>
                        </div>
                    </div>
                    <p className="rendering-description">{Data.deskripsi}</p>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default DeskripsiEvents;