import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/style.css";
import lokasi from "../Components/img/location.png";

class DeskripsiEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:4000/event/json/${id}`,{
            headers : {
                'Content-Type' : 'application/json',
                'Access-Allow-Control-Origin' : '*'
            },
            method : 'GET'
        })
        .then(res => res.json())
        .then(data => this.setState({Data : data}))
        .catch(err => console.log(err))
    }

    render(){
        let Data = this.state.Data;
        return(
            <React.Fragment>
                <Header />
                <div className="Item-styling">
                    <h1>Events Yang Akan di adakan di Kota Bandung</h1><br/>
                    <h1>{Data.nama_event}</h1>
                    <div className="update">
                        <span>Update : </span><br/>
                        <span>{Data.updatedAt}</span>
                    </div>
                    <img src={'http://localhost:8000/img_event/' + Data.foto} className="image-item" alt="" />
                    <div className="lokasi-item">
                        <img src={lokasi} alt="" />
                        <span>Lokasi : </span>
                        <span>{Data.lokasi}</span>
                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default DeskripsiEvents;