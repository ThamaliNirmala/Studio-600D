import React from "react";
import {Link} from "react-router-dom";
import './Header.css';

const Contact = () =>{
    
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
                            <li className="nav-item active">
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
                <h2 style={{fontWeight:"normal"}}> The Most Wonderful Wedding Photography In The World.</h2>
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
                            <li className="li"><Link to="/kids">Kid's Collection</Link></li>
                        </center>
                     </ul>
                </nav>
                
                <article>
                    <div class="jumbotron">
                        <h5 class="display-4" style={{fontSize:"40px", }}>Owner's Information 📸🤵</h5><br/>
                        <img src="https://i.ibb.co/KwY6MSK/Kasun.jpg" style={{width:"300px", float:"left"}} class="img-fluid "/>
                        <p class="lead" style={{fontSize: "50px"}}>
                            <center>
                                <a href="https://www.facebook.com/kasun.chinthaka.167" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true" style={{marginRight:"15px", marginTop:"70px", color:"blue"}}></i></a>
                                <a href="https://api.whatsapp.com/send?phone=94774087979&app=facebook&entry_point=page_cta" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true" style={{marginRight:"15px", marginTop:"50px", color:"green"}}></i></a>
                                <a href="https://www.instagram.com/studio_600d/" target="_blank"><i className="fa fa-instagram" aria-hidden="true" style={{marginTop:"50px", color:"red"}}></i></a><br/>
                            </center>
                        </p>
                        <center>
                            <i class="fa fa-map-marker" aria-hidden="true" style={{color: "red", fontSize: "30px", marginLeft:"25px"}}></i><span style={{fontSize:"15px"}}> Katugastota-Kurunegala-Puttalam Hwy, Nikaweratiya, Sri Lanka.</span><br/>
                            <i class="fa fa-envelope" aria-hidden="true" style={{fontSize: "20px",  marginLeft:"25px"}}></i>  <span> studio600d@gmail.com</span><br/>
                            <i class="fa fa-mobile" aria-hidden="true" style={{fontSize: "40px",  marginLeft:"25px",marginBottom:"80px"}}></i>  <span> +94 774087979</span> 🇱🇰
                        </center>

                        <hr class="my-4"/><br/>
                    
                        <h5 class="display-4" style={{fontSize:"40px"}}>About Developers 🧑‍💻</h5><br/>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <center>
                                        <img src="https://i.ibb.co/hDbbTs9/sahan.jpg" style={{width:"258px"}} class="img-fluid"/>
                                    </center>
                                    <p class="lead" style={{fontSize: "50px"}}>
                                        <center>  
                                            <a href="https://www.facebook.com/Sahan.R.Inc" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true" style={{marginRight:"15px", marginTop:"70px", color:"blue"}}></i></a>
                                            <a href="https://wa.link/yrxoew" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true" style={{marginRight:"15px", marginTop:"50px", color:"green"}}></i></a>
                                            <a href="https://github.com/SahanKumarasiri" target="_blank"><i className="fa fa-github" aria-hidden="true" style={{marginTop:"50px", color:"black"}}></i></a><br/>
                                        </center>
                                    </p>
                                    <center>
                                        <i class="fa fa-map-marker" aria-hidden="true" style={{color: "red", fontSize: "30px"}}></i><span style={{fontSize:"15px"}}> Galewela, Matale District, Central, Sri Lanka.</span><br/>
                                        <i class="fa fa-envelope" aria-hidden="true" style={{fontSize: "20px"}}></i>  <span> kumarasirisahan@gmail.com</span><br/>
                                        <i class="fa fa-mobile" aria-hidden="true" style={{fontSize: "40px",marginBottom:"80px"}}></i>  <span> +94 776135690</span> 🇱🇰
                                    </center>
                                </div>
                                <div class="col">
                                    <center>
                                        <img src="https://i.ibb.co/CsNSnWR/thamali.jpg" style={{width:"250px"}} class="img-fluid"/>
                                    </center>
                                    <p class="lead" style={{fontSize: "50px"}}>
                                        <center>  
                                            <a href="https://www.facebook.com/thamalinirmala.nirmala.3" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true" style={{marginRight:"15px", marginTop:"70px", color:"blue"}}></i></a>
                                            <a href="https://bit.ly/3rZZMO6" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true" style={{marginRight:"15px", marginTop:"50px", color:"green"}}></i></a>
                                            <a href="https://github.com/ThamaliNirmala" target="_blank"><i className="fa fa-github" aria-hidden="true" style={{marginRight:"15px", marginTop:"50px", color:"black"}}></i></a>
                                            <a href="https://www.instagram.com/__thamali_nirmala__/" target="_blank"><i className="fa fa-instagram" aria-hidden="true" style={{marginTop:"50px", color:"red"}}></i></a><br/>
                                        </center>
                                    </p>
                                    <center>
                                        <i class="fa fa-map-marker" aria-hidden="true" style={{color: "red", fontSize: "30px"}}></i><span style={{fontSize:"15px"}}> Walpola, Bamunakotuwa, Kurunegala, Sri Lanka.</span><br/>
                                        <i class="fa fa-envelope" aria-hidden="true" style={{fontSize: "20px"}}></i>  <span> tnirmalaadasooriya@gmail.com</span><br/>
                                        <i class="fa fa-mobile" aria-hidden="true" style={{fontSize: "40px"}}></i>  <span> +94 770113437</span> 🇱🇰
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </article>
            </section>

        </div>
    )
}

export default Contact;