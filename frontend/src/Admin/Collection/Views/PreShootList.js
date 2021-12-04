import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PreShootTableRow from './PreShootTableRow';

export default class PreShootList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      assistants: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/preShoot')
      .then(res => {
        this.setState({
          assistants: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.assistants.map((res, i) => {
      return <PreShootTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
    <div>      
      <div className="container">
        <div className="table-wrapper container">
              <Table striped bordered hover>
                  <thead>
                      <tr>
                        <th>Couple Name</th>
                        <th>Collection URL</th>
                        <th>Image 1</th>
                        <th>Image 2</th>
                        <th>Image 3</th>
                        <th>Downloads</th>
                        <th>Likes</th>
                        <th>UnLikes</th>
                        <th>Password</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.DataTable()}
                  </tbody>
              </Table><br/>
          </div>
      </div>
    </div>
    );
  }
}