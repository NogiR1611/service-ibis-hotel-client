import React,{Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import tempat from "../Components/img/location.png";
import harga from "../Components/img/price.png";
import gmap from "../Components/img/gmap.png";
import '../Components/style.css';
import gif_loading from "../Components/img/loading_img.gif";

class DeskripsiWisata extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : [],
            isLoading : false
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:8000/wisata/json/${id}`,{
            headers : {
                'Content-Type' : 'application/json',
                'Access-Allow-Control-Origin' : '*'
            },
            method : 'GET'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({Data : data,isLoading : true})
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        })
    }

    render(){
        let {Data,isLoading} = this.state;
        const update = {
            "margin" : "0px",
            "justify-self" : "center"
        };

        return(
            <React.Fragment>
                <Header />
                <div className="Item-styling">
                    <h1><b>Tempat wisata yang Kami rekomendasikan di Bandung</b></h1>
                    <h3>{Data.nama_tempat_wisata}</h3>
                    <div className="update">
                        <span style={update}>Update : </span><br/>
                        <span style={update}>{Data.updatedAt}</span>
                    </div>
                    <div className="img-and-facility">
                        <div id="Img-Item">
                            {isLoading && (
                                <img src={gif_loading} className="loading" alt="" />
                            )}
                            {isLoading}
                            {!isLoading && <img src={'http://localhost:8000/img_wisata/' + Data.urlimage} className="image-item" alt="" />}
                        </div>
                        <div id="Location-Item">
                            <div className="lokasi-item" id="Lokasi">
                                <img src={tempat} alt="" />
                                <span><b>Lokasi : </b></span>
                                <span>{Data.lokasi}</span>
                            </div>
                            <div className="lokasi-item" id="Harga">
                                <img src={harga} alt="" />
                                <span><b>Harga : </b></span>
                                <span>{Data.harga}</span>
                            </div>
                             
                             <div className="lokasi-item" id="Map">
                                <img src={gmap} alt="" />
                                <span><b>Lihat Map : </b></span>
                                <span>{}</span>
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

export default DeskripsiWisata;