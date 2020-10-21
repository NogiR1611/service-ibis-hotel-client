import React,{Component} from "react";
import ListEventService from "./event.service";
import Deskripsi from "../Components/Deskripsi";
import Header from "../Components/Header";
import ListPage from "../Components/ListPage";
import Footer from "../Components/Footer";

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

    /*
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
    */
    fetchListEvent = () => {
        ListEventService.getAll()
        .then(response => {
            const {data} = response.data;
            this.setState({
                Data : data
            });
        })
        .catch((err) =>{
            console.log(err)
        });
    }

    /*
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
    */
    render(){
        const border_list = {
            "border" : "1px solid black"
        };
        const {Data,count,page} = this.state;
        return(
            <React.Fragment>
                <Header />
                <ListPage 
                    title="Jadwal Event Terbaru di Kota Bandung"
                    list_item={Data.map( (element,index) =>
                        <li key={index}>
                            <span style={border_list} />
                            <a href={'/event/' + element.id} className='link-item'>
                                <img src={'http://localhost:8000/img/' + element.foto} className="list-image-item" alt="" />
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
                    count={count}
                    page={page}
                    onChange={this.handlePageChange}
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ListEvents;