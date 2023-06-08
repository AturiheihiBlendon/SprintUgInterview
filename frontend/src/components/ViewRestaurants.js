import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const imgstyle = {
    width:350,
    height:200,
    paddingTop:10
};

function ViewRestaurant() {
    const navigate = useNavigate()
    const id = useParams().id
    const [data, setData] = useState([])
    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/${id}`).then((res) => {
            // console.log(res.data)
            setData(res.data)
            setImage(res.data.image)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const Delete = () => {
        axios.delete(`http://127.0.0.1:5000/api/delete/${id}`).then((res) =>{
            // console.log("delete")
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <section style={{ height: "100vh", paddingTop: "40px" }}>
                <Grid container justifyContent="center" paddingBottom={5}>
                    <Typography variant="h4">Restaurant Details</Typography>
                </Grid>
                <Grid container
                    justifyContent="center">
                    <Grid item xs={12} lg={6}>
                        <Card >
                            <Grid container justifyContent="center">
                            <img style={imgstyle} src={`http://127.0.0.1:5000/${image}`}/>
                            </Grid>
                            
                            <Grid container justifyContent="center">
                                <CardContent >
                                    <Typography gutterBottom variant="h4" component="div">
                                        Name: {data.name}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Cuisine type: {data.cuisine}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Location: {data.location}
                                    </Typography>
                                </CardContent>
                            </Grid>

                            <CardActions>
                                <Grid container sx={{
                                    display: "flex",
                                    justifyContent: 'space-evenly',
                                    paddingTop: "20px"
                                }}>
                                    <Button variant='outlined' size="small" onClick={()=>{navigate('/edit/' + id)}}>Edit</Button>
                                    <Button variant='contained' color='warning' size="small" onClick={Delete}>Delete</Button>
                                </Grid>

                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
        </section>

    )
}

export default ViewRestaurant