import React,{Component} from "react";
import ListEventService from "./event.service";
import Deskripsi from "../Components/Deskripsi";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Pagination from "@material-ui/lab/Pagination";
import "../Components/style.css";

class ListEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : [],
            page : 1,
            count : 0,
            pageSize : 3,
            Description : ""
        }
    }

    componentDidMount(){
        this.fetchListEvent();
    }

    getRequestParams = (page,pageSize) =>{
        let params = {};

        if(page){
            params["page"] = page - 1;
        }
        if(pageSize){
            params["pageSize"] = pageSize;
        }

        return params;
    }

    fetchListEvent = () => {
        const {page,pageSize} = this.state;
        const params = this.getRequestParams(page,pageSize);
        
        ListEventService.getAll(params)
        .then(response => {
            const {list_events,totalPage} = response.data;
            this.setState({
                Data : list_events,
                count : totalPage
            });
        })
        .catch((err) =>{
            console.log(err)
        });
    }

    handlePageChange = (event,value) => {
        this.setState(
        {
            page : value
        },
        () => {
            this.fetchListEvent();
        }
    )
    }

    render(){
        const border_list = {
            "border" : "1px solid black"
        };
        const {Data,count,page} = this.state;
        return(
            <React.Fragment>
                <Header />
                <div className="item-page">
                    <h1>Event terbaru yang a kan diadakan di Kota Bandung</h1>
                    <ul className="item-list">
                        {Data.map( (element,index) =>
                            <li key={index}>
                                <span style={border_list} />
                                <a href={'/event/' + element.id} className='link-item'>
                                    <img src={'http://localhost:4000/images/' + element.foto} className="list-image-item" alt="" />
                                    <div className='item'>
                                        <h3>{element.nama_event}</h3>
                                        <p><b>Tanggal</b> : {element.tanggal}</p>
                                        <p><b>Tempat</b> : {element.tempat}</p>
                                    </div>
                                    <div className='deskripsi'>
                                        <Deskripsi deskripsi={element.deskripsi}/>
                                    </div>
                                </a>
                                <span style={border_list} />
                            </li>
                        )}
                    </ul>
                </div>
                <Pagination count={count} page={page} onChange={this.onPageChange} variant="outlined" shape="rounded"/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListEvents;