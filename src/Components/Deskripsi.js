import React,{Component} from "react";
import "./style.css";
class Deskripsi extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : ""
        }
    }

    componentDidMount(){
        let req = this.props.deskripsi;
        let str = req.substr(0,300);
        this.setState({value : str});
    }

    render(){
        const red = {
            "color" : "red"
        }
        
        return( 
            <p>{this.state.value} ...<span style={red}>[Show More]</span></p>
        );
    }
}

export default Deskripsi;