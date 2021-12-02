import {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import crypto from "crypto";


const Login = ({history}) =>{
    const id = crypto.randomBytes(32).toString("hex");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [error , setError] = useState("");
    const [value , setValue] = useState({
        email:"Kasun Perera"
    });
    
    const loginHandler = async (e)=>{
        e.preventDefault();

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/api/auth/login" , {email , password} , config);
            setValue(data.email);
            localStorage.setItem("authToken" , data.token);

            history.push(`/admin/add/${id}/${email}`);

        } catch (error) {
            setError(error.response.data.error);
            setTimeout(()=>{
                setError("");
            } , 5000); //5s
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("authToken")){  //push a user if he already logged in
            history.push(`/admin/add/${id}/${value.email}`);
        }
    } , [history])

    const  showPassword = () => {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }
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
                                <Link to = "/" className="nav-link "><img src="https://img.icons8.com/ios-glyphs/30/000000/film-reel--v1.png"/>  Home </Link>
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
                            <li className="nav-item active">
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
                            <li className="li"><Link to = "/">Home</Link></li>
                            <li className="li"><a href="#news">Modelling Shoot</a></li>
                            <li className="li"><a href="#contact">Wedding Shoot</a></li>
                            <li className="li"><a href="#about">Birthday Shoot</a></li>
                        </center>
                     </ul>
                </nav>
                <article>
                <form onSubmit={loginHandler}>
                    <div className="card" style = {{marginRight: "auto", marginLeft:"auto", display:"block"}}>
                        <div className = "card-header">
                            ⚠️This Section only for Admin 
                        </div>
                        <div className="card-body">
                            <center>
                                        <h5 className="card-title">Login Form</h5>
                                        {error && <span className="badge bg-warning">{error}</span>} <br/>
                                       <TextField
                                            id="outlined-email-input"
                                            label="Email"
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            placeholder="Enter Email "
                                            margin="normal"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            value = {email} onChange = {(e)=>setEmail(e.target.value)} required
                                            /><br/>
                                        <TextField
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="Enter Password "
                                            margin="normal"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            disableRipple
                                            value = {password} onChange = {(e)=>setPassword(e.target.value)} required
                                            /><br/><br/>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type = "submit"
                                            disableRipple
                                            >
                                            <i class="fa fa-sign-in" aria-hidden="true" style = {{marginRight:"4px"}}></i><span >login</span>
                                        </Button>
                                        
                                    </center>
                                </div>
                        </div>
                </form>
                   
                </article>
            </section><br/><br/><br/>


          
        </div>
    )
}

export default Login;