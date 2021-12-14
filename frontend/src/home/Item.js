import React  from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Header.css";

const Item = () =>{

    var m_names = new Array("January", "February", "March", 
    "April", "May", "June", "July",
    "August", "September", 
    "October", "November", "December");

var today = new Date();
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

const{id, personName, url, image1, image2, image3, downloads, likes, unLikes, category, password} = useParams();
const Image1 = decodeURIComponent(image1);
const Image2 = decodeURIComponent(image2);
const Image3 = decodeURIComponent(image3);
const URL = decodeURIComponent(url);


const handleDownload = async ()=>{
    try {
        const {data} = await axios.put(`http://localhost:8070/${category}/update/${id}` , {downloads} );

    } catch (error) {
        alert(error)
    }
}

const handleLike = async ()=>{
    try {
        const {data} = await axios.put(`http://localhost:8070/${category}/like/${id}` , {likes} );

    } catch (error) {
        alert(error)
    }
}

const handleUnLike = async ()=>{
    try {
        const {data} = await axios.put(`http://localhost:8070/${category}/unLike/${id}` , {unLikes} );

    } catch (error) {
        alert(error)
    }
}

const Like = ()=>{
    document.getElementById("heart").innerHTML = Number(likes) + 1 +` <i class="fa fa-thumbs-up likeColour" aria-hidden="true"></i>`;
    document.getElementById("like").innerHTML = `<span class="alert alert-danger role="alert">You Liked ` + personName + "</span>";
}

const UnLike = ()=>{
    document.getElementById("unlike").innerHTML = Number(unLikes) + 1 +` <i class="fa fa-thumbs-down unLikeColour" aria-hidden="true"></i>`;
    document.getElementById("like").innerHTML = `<span class="alert alert-danger role="alert">You UnLiked ` + personName + "</span>";
}


const Increment = ()=>{
    document.getElementById("increment").innerHTML = Number(downloads) + 1 + ` <i class="fa fa-download" aria-hidden="true"></i>`;
}


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
                    <li><span style={{float:"right"}}>{today}</span></li>
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
                        <Link to="/contact" className="nav-link">Contact Us</Link>
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
            <h2 style={{fontWeight:"normal"}}> The Most Wonderful Wedding Photography In The World.</h2>
        </center>
        <hr className="my-4"></hr>

        <section>
            <nav className="nav">
                <ul className="ul">
                    <center>
                        <li className="li"><Link  to = "/">Home</Link></li>
                        <li className="li"><Link to="/modelling">Modelling</Link></li>
                        <li className="li"><Link to="/preshoot">Pre Shoot</Link></li>
                        <li className="li"><Link to="/weddingshoot">Wedding Shoot</Link></li>
                        <li className="li"><Link to="/goingaway">HomeComming </Link></li>
                        <li className="li"><Link to="/kids">Kid's Collection</Link></li>
                    </center>
                 </ul>
            </nav>
            
            <article>
            <div style={{ width:"auto" , height:"auto"  , maxWidth:"auto"}}>
                
                <center>
                <div style={{display:"inline-block" , padding: "10px 1px 10px 10px"}}>
                <center>
                    <div className="card border border-primary mb-3"> 
                            <center>
                                <img src={Image1} border="0'" alt={Image1} className="img-thumbnail" style={{width:"250px" , height:"400px",margin: "20px 10px 10px 20px"}}/>
                                <img src={Image2} border="0'" alt={Image2} className="img-thumbnail" style={{width:"250px" , height:"400px", margin: "20px 10px 10px 10px"}}/>
                                <img src={Image3} border="0'" alt={Image3} className="img-thumbnail" style={{width:"250px" , height:"400px", margin:"20px 20px 10px 10px"}}/>
                                <div class="card-header" id="like"><span><b>Zip Extraction Password : </b></span> {password}</div>
                                <span className="thumbsup" id="heart" onClick={() => { handleLike(); Like();}}>{likes} <i class="fa fa-thumbs-up" aria-hidden="true" title="Like"></i></span> 
                                <span className="thumbsdown" id="unlike" style= {{marginRight:"5px", marginLeft:"5px"}} onClick={() => { handleUnLike(); UnLike();}}>{unLikes} <i class="fa fa-thumbs-down" aria-hidden="true" title="UnLike" style={{marginRight:"5px"}}></i> | </span>
                                <span id="increment" style = {{marginLeft:"5px"}}>  {downloads} <i class="fa fa-download" aria-hidden="true"></i></span><br/>
                                <div class="card-body text-success">
                                    <span className="badge badge-secondary">{personName}</span><br/><br/>
                                    <a href={URL} target="_blank"><button className="btn btn-danger" onClick={() => { handleDownload(); Increment();}}><i class="fa fa-download" aria-hidden="true"></i> Download Collection</button></a>
                                </div>
                            </center>
                        </div>
                </center>
                    </div>
                </center>
            
            </div>   
            </article>
        </section>


      
    </div>
)


}

export default Item;