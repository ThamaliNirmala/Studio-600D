import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class ModellingTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteAssistant = this.deleteAssistant.bind(this);
    }

    deleteAssistant() {
        axios.delete('http://localhost:8070/modelling/delete/' + this.props.obj._id)
            .then((res) => {
                toast("Success! Modelling Collection Deleted 😘")
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td style={{color:"darkgray"}}>{this.props.obj.modelerName}</td>
                <td style={{color:"darkgray"}}><img src = {this.props.obj.imgURL1} style = {{width:"200px", height: "300px"}} alt = {this.props.obj.modelerName}/></td>
                <td style={{color:"darkgray"}}><img src = {this.props.obj.imgURL2} style = {{width:"200px", height: "300px"}} alt = {this.props.obj.modelerName}/></td>
                <td style={{color:"darkgray"}}><img src = {this.props.obj.imgURL3} style = {{width:"200px", height: "300px"}} alt = {this.props.obj.modelerName}/></td>
                <td style={{color:"darkgray"}}>{this.props.obj.downloads}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.likes}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.unLikes}</td>
                <td style={{color:"darkgray"}}>{this.props.obj.password}</td>
    
                <td style={{width:"250px"}}>
                
                        <Button size="sm" onClick={this.deleteAssistant} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                    
                </td>
                <ToastContainer style={{marginTop:"50px" , position:"absolute"}}/>
            </tr>
        );
    }
}