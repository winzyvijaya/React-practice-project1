
import { useState } from 'react';
import { Container, Grid, TextField, Box, Button } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';




type FormValue = {
    Name: string,
    tel: number,
    date:number,
    text:string,
    amount:number
}
const Appointment = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormValue>()
    const [data, setData] = useState({ Name: '', tel: '', date: '', text: '', amount: '' })

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log("final data", data)

    }

    return (
        <div>

            <Container fixed>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* //<Box component="span" sx={{p:2, color:'#1d395d', textAlign:'left'}}> */}
                        <h1>Appointment Form </h1>
                        {/* </Box> */}
                        <Box>
                            <TextField fullWidth
                                
                                placeholder="Enter Your Full Name"
                            />
                        
                            <TextField
                                fullWidth
                                type="tel"
                                placeholder="Enter Your Mobile Number"
                                {...register("tel", {
                                    required: 'Phone Number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid number',
                                    },
                                })}
                                error={!!errors.tel}
                                helperText={errors.tel ? errors.tel.message : ''}
                            />
                            <TextField fullWidth
                                type="date"
                                
                            />
                            <TextField fullWidth
                                
                                placeholder="Enter The Name Of Dr."
                            />
                            <TextField fullWidth
                                
                                placeholder="Enter The Purpose Of Appointment "
                            />
                            <TextField fullWidth
                                
                                placeholder="Enter The Amount Payed"
                            />


                            <Button style={{marginTop:"20px"}} type="submit" fullWidth variant="contained">Submit</Button>
                        </Box>

                    </form>


                </div>
            </Container>
        </div>
    );
}
export default Appointment;
