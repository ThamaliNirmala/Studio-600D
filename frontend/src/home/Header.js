import React from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
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
                        <li><a href="mailto:" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i>studio600d@gmail.com</a></li>
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
                    <a className="navbar-brand" href="#"><img src="https://i.ibb.co/D8BXSb1/Studio-600-D.png"  alt="logo" style={{width:"73%"}} className="img-thumbnail"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbartoggle">
                        <ul className="navbar-nav float-right">
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home </a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-picture-o" aria-hidden="true"></i> Category</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Pre Shoot</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Wedding Shoot</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Going Away</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Modelling photography</a>
                                <a className="dropdown-item" href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Birthday Shoot</a>
                            </div>
                            </li>   
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Admin</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa fa-handshake-o" aria-hidden="true"></i> Contact Us</a>
                            </li>               
                        </ul>
                        </div>
                    </nav>
                    </div>
                </div>
                </div>  
            </header>
            <div class="card">
                <div class="card-header">
               
                <marquee>
                        <span  style={{marginLeft:"10px"}}><i className="fa fa-bolt"></i> <span className="badge badge-danger" style={{color:"#f4f4f4f4", fontFamily:"Copperplate, Papyrus, fantasy", fontSize:"20px"}}> The Most Wonderful Wedding Photography In The World.</span></span>  
                    </marquee>
                </div>
            </div><br/>

            <section>
                <nav className="nav">
                    <ul className="ul">
                        <center>
                            <li className="li"><a class="active" href="#home">Home</a></li>
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
                                <h5 className="card-title">The Most Popular Photo Collection - Studio-600D ♥️📸</h5><br/>
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
   
                            </center>
                        </div>
                    </div>
                   
                </article>
            </section>


          
        </div>
    )
}

export default Header;