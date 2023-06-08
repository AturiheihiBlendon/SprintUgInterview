import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Restaurant from './restaurant'

function ListRestaurants() {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api').then((res) => {
            // console.log(res.data)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return (
        <>
            <section style={{ height: "100vh", paddingTop: "40px" }}>
                <Grid container justifyContent="center" paddingBottom={5}>
                    <Typography variant="h4">All Restaurants </Typography>
                </Grid>
                <Grid container justifyContent="center">
                    <Button onClick={()=>{
                        navigate('/add')
                    }}>Click to add restaurant</Button>
                </Grid>
                {data.length > 0 && (
                    <>
                        {data.map((item) => (
                            <Restaurant
                                name={item.name}
                                id={item._id}
                                location={item.location}
                                key={item._id} />
                        ))}
                    </>
                )}
            </section>
        </>
    )
}

export default ListRestaurants