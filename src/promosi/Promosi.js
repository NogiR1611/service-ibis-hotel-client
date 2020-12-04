import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/style.css";
import Shimmer from "react-shimmer-effect";

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
                                <Shimmer>
                                    <div className={"image-item"}/>
                                </Shimmer>
                            )}
                            {isLoading}
                            {!isLoading && <img src={'http://localhost:8000/img_promotion/' + Data.foto} className="image-item" style={{"height" : `${Data.imgheight}px`,"width" : `${Data.imgwidth}px`}} alt="" />}
                        </div>
                    </div>
                    <div className="">
                        <h4>Periode</h4>
                        <p className="rendering-description">{Data.periode}</p>
                    </div>
                    <div className="">
                        <h4>Persyaratan & Ketentuan</h4>
                        <p className="rendering-description">{Data.syarat}</p>
                    </div>
                    <div className="">
                        <h4>Deskripsi</h4>
                        <p className="rendering-description">{Data.deskripsi}</p>
                    </div>
                    <div className="">
                        <h4>Info Lebih Lanjut</h4>
                        <p className="rendering-description">{Data.kontak}</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default DeskripsiPromosi;