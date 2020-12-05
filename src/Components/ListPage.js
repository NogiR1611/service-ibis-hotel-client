import React,{Component} from "react";
import Pagination from "react-js-pagination";
import "./style.css";

class ListPage extends Component{
    render(){
        return(
            <div className='item_page'>
                <div className="title-item-page"> 
                    <h3>{this.props.title}</h3>
                </div>
                <ul className='item_list'>
                    {this.props.list_item}
                </ul>
                
                <Pagination
                    activePage = {this.props.activePage}
                    itemsCountPerPage = {this.props.itemsCountPerPage}
                    totalItemsCount = {this.props.totalItemsCount}
                    pageRangeDisplayed = {this.props.pageRangeDisplayed}
                    onChange = {this.props.onChange}
                />
            </div>
        );
    }
}

export default ListPage;