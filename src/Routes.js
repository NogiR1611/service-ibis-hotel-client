import React,{Component} from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";

class Routes extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/contact" component={Contact} />
            </Router>
        );
    }
}

export default Routes;