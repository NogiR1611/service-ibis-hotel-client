import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/style.css";
import gif_loading from "../Components/img/loading_img.gif";
import note from "../Components/img/note.png";
import arrow_down from "../Components/img/arrow_down.png";

class DeskripsiPromosi extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : [],
            isLoading : false
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:8000/promosi/json/${id}`,{
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
                    <h1><b>Beragam Promosi yang kami Adakan Saat ini</b></h1><br/>
                    <h2>{Data.judul_promosi}</h2>
                    <div className="update">
                        <span>Oleh : </span><br/>
                        <span>{Data.penulis}</span><br/>
                        <span>Update : </span><br/>
                        <span>{Data.updatedAt}</span>
                    </div>
                    <div className="img-and-facility">
                        <div id="Img-Item">
                            {isLoading && (
                                <img src={gif_loading} className="loading" alt="" />
                            )}
                            {isLoading}
                            {!isLoading && <img src={'http://localhost:8000/img_promotion/' + Data.foto} className="image-item" style={{"height" : `${Data.imgheight}px`,"width" : `${Data.imgwidth}px`}} alt="" />}
                        </div>
                    </div>
                    <div className="note-promotion">
                        <button className="dropbtn" onClick={this.myDropDown}><img src={note} className="dropbtn" alt="" /><span><b>Periode</b></span><img src={arrow_down} className="arrow_down" alt="" /></button>
                        <p id="rendering-description" className="rendering-description">{Data.periode}</p>
                    </div>
                    <div className="note-promotion">
                        <button className="dropbtn" onClick={this.myDropDown}><img src={note} className="dropbtn" alt="" /><span><b>Ketentuan & Persyaratan</b></span><img src={arrow_down} className="arrow_down" alt="" /></button>
                        <p id="rendering-description" className="rendering-description">{Data.syarat}</p>
                    </div>
                    <div className="note-promotion">
                        <button className="dropbtn" onClick={this.myDropDown}><img src={note} className="dropbtn" alt="" /><span><b>Deskripsi</b></span><img src={arrow_down} className="arrow_down" alt="" /></button>
                        <p id="rendering-description" className="rendering-description">{Data.deskripsi}</p>
                    </div>
                    <div className="note-promotion">
                        <button className="dropbtn" onClick={this.myDropDown}><img src={note} className="dropbtn" alt="" /><span><b>Info Lebih Lanjut</b></span><img src={arrow_down} className="arrow_down" alt="" /></button>
                        <p id="rendering-description" className="rendering-description">{Data.kontak}</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default DeskripsiPromosi;