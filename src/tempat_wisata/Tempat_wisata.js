import React,{Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Components/style.css';
 
/*
class TempatWisata extends Component{
    constructor(props){
        super(props)
        this.state = {
            list_wisata : this.props.render_list_wisata(this.props.id)
        }
    }
    
    render(){
        let judul = this.state.list_wisata.nama_tempat_wisata;
        let lokasi = this.state.list_wisata.lokasi;
        let harga = this.state.list_wisata.harga;
        let urlimage = this.state.list_wisata.urlimage;
        let deskripsi = this.state.list_wisata.deskripsi;
        
        return(
            <container>
                <h1>{judul}</h1>
                <img src={'http://localhost:4000/images' + urlimage} />
                <h4>{lokasi}</h4>
                <h4>{harga}</h4>
                <p>{deskripsi}</p>
            </container>
        )
    }
}
*/

class DeskripsiWisata extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:4000/tempat-wisata/json/${id}`,{
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
                <h1>Tempat wisata kami</h1>
                <h1>{Data.nama_tempat_wisata}</h1>
                <p>{Data.deskripsi}</p>
                <Footer />
            </React.Fragment>
        );
    }
}

export default DeskripsiWisata;