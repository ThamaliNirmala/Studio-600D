import React from "react";
import {Link} from "react-router-dom";
import './Header.css';
import GoingAway from "./GoingAway"
import WeddingShoot from "./WeddingShoot"
import Modelling from "./Modelling"


const Header = () =>{
    
    var m_names = new Array("January", "February", "March", 
                "April", "May", "June", "July",
                "August", "September", 
                "October", "November", "December");

    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth();
    var curr_year = today.getFullYear();

    today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

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
                            <a className="nav-link active" href="#"><img src="https://img.icons8.com/ios-glyphs/30/000000/film-reel--v1.png"/>  Home </a>
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
                        <li className="li"><Link className="active" to = "/">Home</Link></li>
                            <li className="li"><Link to="/modelling">Modelling</Link></li>
                            <li className="li"><Link to="/preshoot">Pre Shoot</Link></li>
                            <li className="li"><Link to="/weddingshoot">Wedding Shoot</Link></li>
                            <li className="li"><Link to="/goingaway">HomeComming </Link></li>
                            <li className="li"><Link to="/kids">Kid's Collection</Link></li>
                        </center>
                     </ul>
                </nav>
                
                <article>
                    <div className="card">
                        <div className="card-header">
                            Featured <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Crew of the Studio-600D <i className="fa fa-heart" aria-hidden="true" style = {{color:"red"}}></i> <i className="fa fa-camera" aria-hidden="true"></i></h5><br/>
                                    <a href="https://www.facebook.com/kasun.chinthaka.167" target="_blank"><img  className="rounded-circle" src="https://i.ibb.co/2ksB7CY/kasunP.jpg"  style={{width:"20%", marginRight:"15px"}} className="zoom" title="Kasun Perera"/></a>
                                    <a href="https://www.facebook.com/thivazz" target="_blank"><img className="rounded-circle" src="https://i.ibb.co/D1mn5qB/Thiwanka.jpg" style={{width:"20%", marginRight:"15px"}} className="zoom" title="Thiwanka Padmal"/></a>
                                    <a href="https://www.facebook.com/profile.php?id=100011016543706" target="_blank"><img className="rounded-circle" src="https://i.ibb.co/5GVq2GR/Amila.jpg" style={{width:"20%", marginRight:"15px"}} className="zoom" title="Amila Perera"/></a>
                                    <a href="https://www.facebook.com/pasindu.randimalrasnayaka" target="_blank"><img className ="rounded-circle" src="https://i.ibb.co/SwdBsXy/Pasindu.jpg" style={{width:"19.9%"}} className="zoom"title="Pasindu Randimal"/></a><br/>
                            </center>
                        </div><br/>
                    </div><br/>
                        <center>
                            <h5 className="card-title">The Most Popular Photo Collection </h5><br/>
                            <div style={{display:"inline-grid" , marginLeft:"10px"}}>
                                <GoingAway/>

                            </div> 

                            <div style={{display:"inline-grid" , marginLeft:"10px"}}>
                                <WeddingShoot/>

                            </div> 

                            <div style={{display:"inline-grid" , marginLeft:"10px"}}>
                                <Modelling/>

                            </div>   
                        </center>
                   
                </article>
            </section>


          
        </div>
    )
}

export default Header;