import React,{Component} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Components/style.css";

class TempatWisata extends Component{
    constructor(props){
        super(props);
        this.state = {
            testAPI : ""
        };
    }

    API = () => {
        fetch('http://127.0.0.1:4000/testAPI')
        .then(res => res.text())
        .then(res => this.setState({testAPI : res}));
    }

    componentDidMount(){
        this.API();
    }


    render(){
        return(
            <container>
                <Header />
                <div className="">
                    <h1>Tempat wisata terbaru</h1>
                    <button onClick={this.API}>Oke</button>
                    {this.state.testAPI}
                </div>
                <Footer />
            </container>
        );
    }
}

export default TempatWisata;