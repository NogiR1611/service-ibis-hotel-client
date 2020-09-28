import React,{Component} from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";
import ListWisata from "./List_Tempat_Wisata";
import Events from "./Events";
import titipanBarang from "./Titipan_barang";
import listBarang from "./List_barang";

class Routes extends Component{
    render(){
        return(
            <Router basename="/ibishotel-with-react">
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Contact" component={Contact} />
                <Route path="/List-wisata" component={ListWisata} />
                <Route path="/Event" component={Events} />
                <Route path="/Titipan-barang" component={titipanBarang} />
                <Route path="/List-barang" component={listBarang} />
            </Router>
        );
    }
}

export default Routes;