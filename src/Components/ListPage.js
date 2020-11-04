import React,{Component} from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./style.css";

class ListPage extends Component{
    render(){
        return(
            <div className='item_page'>
                <h3>{this.props.title}</h3>
                <ul className='item_list'>
                    {this.props.list_item}
                </ul>
                     
                <Pagination
                    count={this.props.count}
                    page={this.props.page}
                    onChange={this.props.onChange}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                />    
            </div>
        );
    }
}

export default ListPage;