import {useState} from 'react';
import { Container, Grid, TextField, Box,Button} from "@mui/material";
import {useForm, SubmitHandler} from 'react-hook-form';
import { useNavigate} from 'react-router-dom';


type FormValue={
    email: string,
    password: string
}
const Login=()=>{
    const {register,handleSubmit, formState:{errors},} = useForm<FormValue>()
    const [data, setData] = useState({email:'',password:''})
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValue>=(data)=>{
        console.log("final data", data)
        navigate('/');
    }
    // const history = useHistory();

    // const handleSubmit = (event) => {
    // event.preventDefault();
    // // Logic to handle form submission, e.g., API calls, data validation, etc.

    // // Assuming successful submission, navigate to the new dashboard page
    // history.push('/dashboard'); // Redirects to the '/dashboard' route
  //};
    return(
        <div>
            
            <Container fixed>
                <div className="form-wrapper">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box component="span" sx={{p:2, color:'#1d395d', textAlign:'left'}}>
                        <h1>Login</h1>
                        </Box>
                        <Box>
                        <TextField fullWidth
                        label="Email"
                        placeholder="Enter Email"
                        {
                            ...register("email",{
                                required:"Email is required",
                                pattern:{
                                    value : /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message:'Invalid Email'
                                }
                            })
                        }
                        />
                        {
                            errors.email &&(
                                <p>{errors.email.message}</p>
                            )
                        }
                        <TextField fullWidth
                        type="password"
                        label="Password"
                        placeholder="Enter Password"
                        {
                            ...register("password",{
                                required:"Password is required",
                                pattern:{
                                    value:/^[A-Za-z]\w{7,14}$/,
                                    message:'Invalid Password'
                                }
                            })
                        }
                        />
                         {
                            errors.password &&(
                                <p>{errors.password.message}</p>
                            )
                        }
                        <Button style={{marginTop:"20px"}} type="submit" fullWidth variant="contained">Submit</Button>
                        </Box>
                        
                    </form>
                </Grid>
              </Grid>
            
              </div>
            </Container>
        </div>
    );
}
export default Login;
