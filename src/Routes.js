import React,{Component} from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./contact/Contact";
import ListWisata from "./tempat_wisata/List_Tempat_Wisata";
import DeskripsiWisata from "./tempat_wisata/Tempat_wisata";
import Promosi from "./promosi/List_Promosi";
import DeskripsiPromosi from "./promosi/Promosi";
import titipanBarang from "./Titipan_barang";
import listBarang from "./List_barang";
 
class Routes extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/List-wisata" component={ListWisata} />
                <Route path="/Tempat-wisata/:id" component={DeskripsiWisata} />
                <Route path="/List-Promosi" component={Promosi} />
                <Route path="/Promosi/:id" component={DeskripsiPromosi} />
                <Route path="/Titipan-barang" component={titipanBarang} />
                <Route path="/List-barang" component={listBarang} />
            </Router>
        );
    }
}

export default Routes;