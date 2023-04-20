import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AudioArray from './AudioArray'
// import { BsPlayFill } from 'react-icons/bs'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';
const Audioss = () => {
    const AudioSlice = useSelector((store) => store.AudioSlice.value)
    console.log(AudioSlice, ' audioslice')
    return (
        <>

            <Box>
                <Container>
                    <Typography component='h1' sx={{
                        fontSize: { md: "4rem", xs: "2rem" },
                        textAlign: "center",
                        fontWeight: 900,
                        color: "#3E3E3E",
                        margin: "3rem 0px"

                    }}>
                        Audio Player Project
                    </Typography>
                    <Grid container spacing={3}>


                        <Grid item xs={12} md={12}>
                            <Typography component='h3' sx={{
                                fontSize: { md: "3rem", xs: "1.9rem" },
                                color: "#4E4E4E",
                                fontWeight: 800,
                                margin: "1.5rem 0px",
                                textAlign: "center"

                            }}>
                                Audio List
                            </Typography>
                        </Grid>




                        {
                            AudioArray.map((item) => {
                                return (
                                    <>
                                        <Grid item xs={12} md={3}>



                                            <Box sx={{
                                                margin: "1rem 0px",
                                                position: "relative",

                                            }}>
                                                <img src={item.img} width="100%" style={{ borderRadius: "10px" }} alt="" />
                                                <Typography sx={{
                                                    fontSize: { md: "2rem", xs: "1rem" },
                                                    color: "#4e4edf",
                                                    textTransform: "capitalize",
                                                    fontWeight: 800,
                                                    fontFamily: "arial"
                                                }}>{item.name}</Typography>
                                                <PlayArrowIcon sx={{
                                                    color: "#2ee3fe",
                                                    fontSize: { md: "10em", xs: "5em" },
                                                    position: "absolute",
                                                    opacity: 0.8,
                                                    // zIndex: 1,
                                                    bottom: { xs: "40px", md: "40%" },
                                                    left: { xs: "10px", md: "10%" }
                                                }} />
                                                <Typography sx={{
                                                    fontSize: { md: "1.2rem", xs: "0.8rem" },
                                                    color: "#7e7ee7",
                                                    textTransform: "capitalize",
                                                    fontWeight: 600,
                                                    fontFamily: "arial"
                                                }}>{item.description}</Typography>
                                            </Box>
                                        </Grid>
                                    </>
                                )
                            })
                        }

                        <Box>

                        </Box>

                        <Grid item xs={12} md={12}>
                            <Typography component='h3' sx={{
                                fontSize: { md: "3rem", xs: "1.9rem" },
                                color: "#4E4E4E",
                                fontWeight: 800,
                                margin: "1.5rem 0px"
                            }}>
                                Audio
                            </Typography>

                            <Box textAlign="center">
                                <img src={AudioSlice.img} width="40%" style={{
                                    borderRadius: "10px",

                                }} alt="" />
                                <Typography sx={{
                                    fontSize: { md: "1rem", xs: "0.5rem" },
                                    color: "#4e4edf",
                                    textTransform: "capitalize",
                                    fontWeight: 600,
                                    fontFamily: "arial",

                                }}>
                                    {AudioSlice.name}
                                </Typography>
                                <Box sx={{
                                    margin: "auto",
                                    background: "#1e1e",
                                    width: "fit-content"
                                }}>
                                    <ArrowLeftIcon sx={{
                                        fontSize: "2rem",

                                    }} />
                                    <audio controls style={{

                                    }}>
                                        <source src={AudioSlice.audiolink} type="audio/mpeg" />
                                    </audio>

                                    <ArrowRightIcon sx={{
                                        fontSize: "2rem",

                                    }} />
                                </Box>
                            </Box>


                        </Grid>
                    </Grid>
                </Container>
            </Box>


        </>
    )
}

export default Audioss