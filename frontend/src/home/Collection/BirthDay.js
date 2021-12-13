import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import crypto from "crypto"


export default class Item extends React.Component {
    state = {
      query: "",
      data: [],
      filteredData: [],
      today:''
    };
  
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.personName.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredData
        };
      });
    };
  
    getData = () => {
      fetch(`http://localhost:8070/birthDay`)
        .then(response => response.json())
        .then(data => {
          const { query } = this.state;
          const filteredData = data.filter(element => {
            return(
              element._id.toLowerCase().includes(query.toLowerCase()) >= 0 ||
              element.personName.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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
  
    Date(){
      var m_names = new Array("January", "February", "March", 
      "April", "May", "June", "July",
      "August", "September", 
      "October", "November", "December");
  
      var today = new Date();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();
  
      today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;
  
      this.setState({
          today
      })
  
    }
  
    componentWillMount() {
      this.getData();
      this.Date();
    }


render() {
    return(
        <div id="header">
            <div className="topbar">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                    <ul>
                        <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i> 0774087979</li>
                        <li>|</li>
                        <li><a href="mailto:" target="_blank" style = {{textDecoration: "none"}}><i className="fa fa-envelope-o" aria-hidden="true"></i>studio600d@gmail.com</a></li>
                        <li>|</li>
                        <li><i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Hours Working</li>
                        <li><span style={{float:"right"}}>{this.state.today}</span></li>
                    </ul>
                    </div>
                    <div className="col-sm-4">
                    <ul className="social-icon">
                        <li className="followus-label">Follow Us:</li>
                        <li><a href="https://www.facebook.com/studio600d" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=94774087979&app=facebook&entry_point=page_cta" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/thamali-nirmala" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <header>
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src="https://i.ibb.co/D8BXSb1/Studio-600-D.png"  alt="logo" style={{width:"73%"}} className="img-thumbnail" title = "Studio-600D"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars" aria-hidden="true"></i><span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbartoggle">
                        <ul className="navbar-nav float-right">
                            <li className="nav-item">
                            <Link className="nav-link" to="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/film-reel--v1.png"/>  Home </Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Collection</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/kids"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Kids Collection </Link>
                                <Link className="dropdown-item" to="/goingaway"><i className="fa fa-check-circle-o" aria-hidden="true"></i> HomeComming </Link>
                                <Link className="dropdown-item" to="/modelling"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Modelling</Link>
                                <Link className="dropdown-item" to="/preshoot"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Pre Shoot </Link>
                                <Link className="dropdown-item" to="/weddingshoot"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Wedding Shoot </Link>
                            </div>
                            </li>   
                            <li className="nav-item">
                            <Link to="/login" className="nav-link">Admin</Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"> Contact Us</a>
                            </li>               
                        </ul>
                        </div>
                    </nav>
                    </div>
                </div>
                </div>
            </header>
            <hr className="my-4"></hr>
            <center>
                <h2 style = {{fontFamily:"Times, Times New Roman, serif"}}> The Most Wonderful Wedding Photography In The World.</h2>
            </center>
            <hr className="my-4"></hr>

            <section>
                <nav className="nav">
                    <ul className="ul">
                        <center>
                            <li className="li"><Link to = "/">Home</Link></li>
                            <li className="li"><Link to="/modelling">Modelling</Link></li>
                            <li className="li"><Link to="/preshoot">Pre Shoot</Link></li>
                            <li className="li"><Link to="/weddingshoot">Wedding Shoot</Link></li>
                            <li className="li"><Link to="/goingaway">HomeComming </Link></li>
                            <li className="li"><Link className="active" to="/kids">Kid's Collection</Link></li>
                        </center>
                     </ul>
                </nav>
                
                <article>
                <div class="input-group rounded sticky-top">
                      <input type="search" class="form-control rounded" placeholder="Search for Photo Collection" aria-label="Search" aria-describedby="search-addon" onChange={this.handleInputChange} value={this.state.query} />
                      <button type="button" class="btn btn-dark">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                    <br/>
                    <div style={{ width:"auto" , height:"auto"  , maxWidth:"auto"}}>
                
                        <center>
                            <div>
                                {this.state.filteredData.length === 0 ? (
                                                <div className="alert alert-danger" style={{marginLeft:"", width:"50%"}}>
                                                    <center>This Photo Collection is not here 
                                                    <img src="https://i.ibb.co/9pzk3Cw/not-found-image-15383864787lu.jpg" style={{width:"50%"}}/></center>
                                                </div>
                                            ): (this.state.filteredData.map(i => 
                                <div style={{display:"inline-block" , padding: "10px 1px 10px 10px"}}>
                                    <center>
                                        <div className="card border-primary mb-3" > 
                                            <div className="card-body text-dark">
                                            <img src={i.imgURL1} border="0'" alt={i.personName} className="img-thumbnail zoom" style={{width:"200px" , height:"300px", margin:"10px 10px 10px 10px"}}/>
                                            <br/><br/>
                                            <p className="badge badge-secondary">{i.personName}</p><br/>
                                            <span style={{float:"left"}} className="likeColour"><i class="fa fa-thumbs-up" aria-hidden="true"></i> {i.likes} </span>
                                            <span style={{ marginRight:"125px"}} className="unLikeColour"> <i class="fa fa-thumbs-down" aria-hidden="true"></i> {i.unLikes}</span>
                                            <span style={{float:"right"}}><i class="fa fa-download" aria-hidden="true"></i> {i.downloads}</span><br/>
                                            <Link to= {`/view/${i._id}/${crypto.randomBytes(40).toString("hex")}/${i.personName}/${encodeURIComponent(i.collectionURL)}/${encodeURIComponent(i.imgURL1)}/${encodeURIComponent(i.imgURL2)}/${encodeURIComponent(i.imgURL3)}/${i.downloads}/${i.likes}/${i.unLikes}/${i.category}/${i.password}/${encodeURIComponent("/birthDay")}`}><button className="btn btn-primary" style={{width:"100%"}}><i class="fa fa-eye" aria-hidden="true"></i> View</button></Link>
                                            </div>
                                        
                                        </div>
                                    </center>

                                </div>))}
                            </div>
                        </center>
                
                    </div>
                   
                </article>
            </section>


          
        </div>
    )
    }
}
  