import React,{Component} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/style.css";

class DeskripsiEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:4000/Event/${id}`,{
            headers : {
                'Content-Type' : 'application/json',
                'Access-Allow-Control-Origin' : '*'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({Data : data}))
    }

    render(){
        let Data = this.state.Data;
        return(
            <React.Fragment>
                <Header />
                <h1>Events</h1>
                <h1>{Data.nama_event}</h1>
                <p>{Data.tempat}</p>
                <p>{Data.deskripsi}</p>
                <Footer />
            </React.Fragment>
        );
    }
}

export default DeskripsiEvents;