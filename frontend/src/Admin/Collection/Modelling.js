import {useState , useEffect} from "react";
import axios from "axios";
import { TextField , Button} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modelling = ()=>{

    const [modelerName , setModelerName] = useState("");
    const [imgURL1 , setImgURL1] = useState("");
    const [imgURL2 , setImgURL2] = useState("");
    const [imgURL3 , setImgURL3] = useState("");
    const [password , setPassword] = useState("");
    const downloads = -1;
    const likes = -1;
    const unLikes = -1;
    const category = "modelling";
    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);

    const modellingHandler = async (e)=>{
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        try {
            const {data} = await axios.post("http://localhost:8070/modelling/add" , {modelerName , imgURL1 , imgURL2 , imgURL3 , downloads , likes , unLikes , category, password} , config);
            toast("Success! Modelling collectoin Added 😘")
            setLoading(false);

        } catch (error) {
            toast("Error! Modelling Collection not Added Duplicate Key Found: Modeler Name must be unique")
            setLoading(false);
            setIsError(true);
            setTimeout(()=>{
              
            } , 5000); //5s
        }
    }

    return(
        <div>
            <form onSubmit={modellingHandler}>
                    <div className="card">
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add Modelling Photo Collection</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Modeler Name"
                                    placeholder="ex: Nethu"
                                    margin="normal"
                                    variant="outlined"                                  
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={modelerName}
                                    onChange={(e)=>setModelerName(e.target.value)} required 
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Image1 URL"
                                    placeholder="URL of Image1"
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={imgURL1}
                                    onChange={(e)=>setImgURL1(e.target.value)} required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Image2 URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL of Image2"
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={imgURL2}
                                    onChange={(e)=>setImgURL2(e.target.value)} required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Image3 URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL of Image3"
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={imgURL3}
                                    onChange={(e)=>setImgURL3(e.target.value)} required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Zip password"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Zip Password"
                                    type="text"
                                    size="small"
                                    color="secondary"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)} required
                                /><br/>
                                
                                {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}<br/>
                                    {/*decision*/}
                                <Button variant="contained" color="secondary" type="submit"
                                disabled={loading}>
                                <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6> {loading ? 'Uploading...' : 'Upload'}  
                                </Button>
                                <ToastContainer style={{marginTop:"5px" , position:"absolute"}}/>
                                
                            </center>
                        </div>
                    </div>
                </form>
        </div>
    )
    
}

export default Modelling;