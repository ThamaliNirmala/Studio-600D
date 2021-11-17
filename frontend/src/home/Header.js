import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

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
                                <a className="dropdown-item" href="#"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Pre Shoot</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Wedding Shoot</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Going Away</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Modelling photography</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Birthday Shoot</a>
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
            <hr class="my-4"></hr>
            <center>
                <h2 style = {{fontFamily:"Times, Times New Roman, serif"}}> The Most Wonderful Wedding Photography In The World.</h2>
            </center>
            <hr class="my-4"></hr>

            <section>
                <nav className="nav">
                    <ul className="ul">
                        <center>
                            <li className="li"><Link class="active" to = "/">Home</Link></li>
                            <li className="li"><a href="#news">Modelling Shoot</a></li>
                            <li className="li"><a href="#contact">Wedding Shoot</a></li>
                            <li className="li"><a href="#about">Birthday Shoot</a></li>
                        </center>
                     </ul>
                </nav>
                
                <article>
                    <div className="card">
                        <div className="card-header">
                            Featured <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Crew of the Studio-600D <i class="fa fa-heart" aria-hidden="true" style = {{color:"red"}}></i> <i class="fa fa-camera" aria-hidden="true"></i></h5>
                                    <a href="https://www.facebook.com/kasun.chinthaka.167" target="_blank"><img src="https://i.ibb.co/PF27Ntv/kasun.jpg" style={{width:"20%", marginRight:"15px"}} className="zoom" title="Kasun Perera"/></a>
                                    <a href="https://www.facebook.com/thivazz" target="_blank"><img src="https://i.ibb.co/D1mn5qB/Thiwanka.jpg" style={{width:"20%", marginRight:"15px"}} className="zoom" title="Thiwanka Padmal"/></a>
                                    <a href="https://www.facebook.com/profile.php?id=100011016543706" target="_blank"><img src="https://i.ibb.co/5GVq2GR/Amila.jpg" style={{width:"20%", marginRight:"15px"}} className="zoom" title="Amila Perera"/></a>
                                    <a href="https://www.facebook.com/pasindu.randimalrasnayaka" target="_blank"><img src="https://i.ibb.co/SwdBsXy/Pasindu.jpg" style={{width:"19.9%"}} className="zoom"title="Pasindu Randimal"/></a><br/>
                            </center>
                        </div><br/>
                    </div>
                    <div><br/>
                        <center>
                        <h5 className="card-title">The Most Popular Photo Collection </h5><br/>
                                <div className = "container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/M7n0sfN/11.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/BtCF4G1/241504379-2792703214353403-48404448897140136-n.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/JQmqrFF/8.jpg"  class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div><br/><br/>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/4thHTbP/1.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/CJhKwxs/5.jpg" class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card">
                                            <div class="view overlay">
                                                <img src="https://i.ibb.co/xHZ206W/Studio-600-D.jpg"  class="card-img-top" alt=""/>
                                                <a href="#">
                                                <div class="mask rgba-white-slight"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </center>
                    </div>
                   
                </article>
            </section>


          
        </div>
    )
}

export default Header;