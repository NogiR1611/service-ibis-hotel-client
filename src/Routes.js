import React,{Component} from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";
import titipanBarang from "./Titipan_barang";
import listBarang from "./List_barang";

class Routes extends Component{
    render(){
        return(
            <Router basename="/ibishotel-with-react">
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/contact" component={Contact} />
                <Route path="/titipan-barang" component={titipanBarang} />
                <Route path="/list-barang" component={listBarang} />
            </Router>
        );
    }
}

export default Routes;