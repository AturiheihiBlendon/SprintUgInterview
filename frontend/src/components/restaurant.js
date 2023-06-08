import React from 'react'
import { Grid, Card, Box, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Restaurant = ({id,  name, location }) => {
    const navigate = useNavigate()
    return (
        <>
            <Grid container
                alignItems="center"
                justifyContent="center" spacing={1} p={1}>
                <Grid item xs={12} lg={6}>
                    <Card sx={{ maxWidth: "100%" }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: "space-between",
                            }}>
                                <Box>
                                    <Typography gutterBottom>
                                        Name : {name}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography gutterBottom>
                                        Location : {location}
                                    </Typography>
                                </Box>
                                <CardActions>
                                    <Button color='secondary' variant='outlined' size="small" onClick={() => {
                                        navigate("/restaurant/" + id);
                                    }}>DETAILS</Button>
                                </CardActions>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Restaurant