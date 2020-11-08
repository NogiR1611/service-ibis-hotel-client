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
        return( 
            <p>{this.state.value} ...[Show More]</p>
        );
    }
}

export default Deskripsi;