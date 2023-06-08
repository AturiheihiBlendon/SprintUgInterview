import React, { useState, useEffect } from 'react'
import { Grid, Paper, Button, FormGroup, FormControl, InputLabel, Input } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const paperstyle = {
    margin: "20px auto",
    width: 300,
    padding: 20,
};
const formstyle = {
    padding: 10,
    margin: "5px auto"
};

function EditRestaurant() {
    const id = useParams().id
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/${id}`).then((res) => {
            // console.log(res.data)
            setName(res.data.name)
            setCuisine(res.data.cuisine)
            setLocation(res.data.location)
            setImage(res.data.image)
            // setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    function Save(refresh) {
        refresh.preventDefault();
        const formData = new FormData();
        formData.set("name", name);
        formData.set("cuisine", cuisine);
        formData.set("location", location);
        formData.set("image", image);

        axios.put(`http://127.0.0.1:5000/api/edit/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            console.log("formData")
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <Grid container>
            <Paper style={paperstyle}>
                <Grid align="center" paddingBottom={2}>
                    <h2>EDIT RESTAURANT</h2>
                </Grid>
                <Grid>
                    <FormGroup onSubmit={Save} >
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
                    <Button onClick={Save} variant="contained" fullWidth >
                        Save
                    </Button>

                </Grid>

            </Paper>
        </Grid>
    )
}

export default EditRestaurant