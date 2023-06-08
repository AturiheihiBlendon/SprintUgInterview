import React, { useState } from 'react'
import { Grid, Paper, Button, FormGroup, FormControl, InputLabel, Input } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const paperstyle = {
    margin: "20px auto",
    width: 300,
    padding: 20,
};
const formstyle = {
    padding: 10,
    margin: "5px auto"
};

function AddRestaurant() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    function Add(refresh) {
        refresh.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("cuisine", cuisine);
        formData.append("location", location);
        formData.append("image", image);


        axios.post('http://127.0.0.1:5000/api/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            // console.log("Added")
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <Grid container>
            <Paper style={paperstyle}>
                <Grid align="center" paddingBottom={2}>
                    <h2>ADD RESTAURANT</h2>
                </Grid>
                <Grid>
                    <FormGroup onSubmit={Add} >
                        <FormControl required fullWidth style={formstyle}>
                            <InputLabel size='small'>Name</InputLabel>
                            <Input value={name} onChange={(e) => setName(e.target.value)} type='text' />
                        </FormControl>
                        <FormControl required fullWidth style={formstyle}>
                            <InputLabel size='small' >Cuisine type</InputLabel>
                            <Input value={cuisine} onChange={(e) => setCuisine(e.target.value)} type='text' />
                        </FormControl>
                        <FormControl required fullWidth style={formstyle}>
                            <InputLabel size='small'>Location</InputLabel>
                            <Input value={location} onChange={(e) => setLocation(e.target.value)} type='text' />
                        </FormControl>
                        <FormControl required fullWidth style={formstyle}>
                            <Input name='image' onChange={(e) => setImage(e.target.files[0])} type='file' />
                        </FormControl>

                    </FormGroup>
                    <Button onClick={Add} variant="contained" fullWidth >
                        Add Restaurant
                    </Button>

                </Grid>

            </Paper>
        </Grid>
    )
}

export default AddRestaurant