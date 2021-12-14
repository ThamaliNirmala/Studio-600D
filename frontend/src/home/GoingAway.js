import React from "react";
import { Link } from "react-router-dom";
import crypto from "crypto"


export default class GoingAway extends React.Component {
    state = {
      query: "",
      data: [],
      filteredData: [],
    };
  
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.coupleName.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredData
        };
      });
    };
  
    getData = () => {
      fetch(`http://localhost:8070/goingAway`)
        .then(response => response.json())
        .then(data => {
          const { query } = this.state;
          const filteredData = data.filter(element => {
            return(
              element._id.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.coupleName.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.imgURL1.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.imgURL2.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.imgURL3.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.collectionURL.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.downloads.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.likes.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.unLikes.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.password.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.category.toLowerCase().includes(query.toLowerCase()) >= 0
            )
          });
  
          this.setState({
            data,
            filteredData
          });
        });
    };
    componentWillMount() {
        this.getData();
      }

    render() {
        return(
            <div className="polaroid" style={{ width:"auto" , height:"auto"  , maxWidth:"auto"}}>
                <div>
                    {this.state.filteredData.length === 0 ? (
                        <p></p>
                            ): (this.state.filteredData.map(i => 
                        
                        <p>
                            <center>
                                <div className="card border border-danger mb-3"> 
                                    <div className="card-body text-dark">
                                        <img src={i.imgURL1} border="0'" alt={i.coupleName} className="img-thumbnail zoom" style={{width:"210px" , height:"300px", margin: "10px 10px 10px 10px"}}/>
                                        <br/><br/>
                                        <p className="badge badge-secondary">{i.coupleName}</p><br/>
                                        <span style={{float:"left"}} className="likeColour"><i class="fa fa-thumbs-up" aria-hidden="true"></i> {i.likes} </span>
                                            <span style={{ marginRight:"125px"}} className="unLikeColour"> <i class="fa fa-thumbs-down" aria-hidden="true"></i> {i.unLikes}</span>
                                        <span style={{float:"right"}}><i class="fa fa-download" aria-hidden="true"></i> {i.downloads}</span><br/>
                                        <Link to= {`/view/${i._id}/${crypto.randomBytes(40).toString("hex")}/${i.coupleName}/${encodeURIComponent(i.collectionURL)}/${encodeURIComponent(i.imgURL1)}/${encodeURIComponent(i.imgURL2)}/${encodeURIComponent(i.imgURL3)}/${i.downloads}/${i.likes}/${i.unLikes}/${i.category}/${i.password}/${encodeURIComponent("/goingAway")}`}><button className="btn btn-primary" style={{width:"100%"}}><i class="fa fa-eye" aria-hidden="true"></i> View Collection</button></Link>
                                    </div>

                                </div>
                            </center>

                        </p> ))}
                </div>
                                
            </div>
        );
    }
}