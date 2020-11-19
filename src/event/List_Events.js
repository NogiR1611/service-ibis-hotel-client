import React,{Component} from "react";
import ListEventService from "./event.service";
import Deskripsi from "../Components/Deskripsi";
import Header from "../Components/Header";
import ListPage from "../Components/ListPage";
import Footer from "../Components/Footer";
import {Shimmer} from 'react-shimmer';

class ListEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
            Data : [],
            page : 1,
            count : 0,
            pageSize : 3,
            Description : "",
            isLoading : false
        }
    }
 
    componentDidMount(){
        this.fetchListEvent();
    }

    getRequestParams = (page,pageSize) => {
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
                isLoading : true
            });
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
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

        return(
            <React.Fragment>
                <Header />
                <ListPage 
                    title="Jadwal Event Terbaru di Kota Bandung"
                    list_item={Data.map( (element,index) =>
                        <li key={index}> 
                            <span style={border_list} />
                            <a href={'/event/' + element.id} className='link-item'>
                                {isLoading === true?
                                    <div className="list-image-item"><Shimmer height={120} width={120}/></div>:
                                    <img src={'http://localhost:8000/img_event/' + element.foto} className="list-image-item" alt="" />
                                }
                                <div className='item'>
                                    <h3>{isLoading === true?<Shimmer height={240} width={40} /> : element.nama_event}</h3>
                                    <p><b>Tanggal</b> : {isLoading === true?<Shimmer height={240} width={40}/>:element.tanggal}</p>
                                    <p><b>Tempat</b> : {isLoading === true?<Shimmer height={240} width={40}/>:element.tempat}</p>
                                </div>
                                <div className='deskripsi'>
                                    <span style={color_date}>
                                        {isLoading === true?<Shimmer height={240} width={40} />:element.createdAt}
                                    </span>
                                    {isLoading === true?<Shimmer height={720} width={25}/>:<Deskripsi deskripsi={element.deskripsi}/>}
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