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
            Description : "",
            isLoading : true
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
                count : totalPage,
                isLoading : false
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
        const color_date = {
            "color" : "#292b29"
        };
        const {Data,count,page,isLoading} = this.state;

        if(isLoading){
            return <p>Loading</p>
        }

        return(
            <React.Fragment>
                <Header />
                <ListPage 
                    title="Jadwal Event Terbaru di Kota Bandung"
                    list_item={Data.map( (element,index) =>
                        <li key={index}> 
                            <span style={border_list} />
                            <a href={'/event/' + element.id} className='link-item'>
                                <img src={'http://localhost:8000/img_event/' + element.foto} className="list-image-item" alt="" />
                                <div className='item'>
                                    <h3>{element.nama_event}</h3>
                                    <p><b>Tanggal</b> : {element.tanggal}</p>
                                    <p><b>Tempat</b> : {element.tempat}</p>
                                </div>
                                <div className='deskripsi'>
                                    <span style={color_date}>{element.createdAt}</span><Deskripsi deskripsi={element.deskripsi}/>
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