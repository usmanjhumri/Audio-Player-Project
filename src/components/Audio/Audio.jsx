import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AudioArray from './AudioArray'
// import { BsPlayFill } from 'react-icons/bs'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';
const Audioss = () => {
    const music = useSelector((store) => store.AudioSlice)
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
                    <Grid container>
                        <Grid item xs={7} md={7}>
                            <Typography component='h3' sx={{
                                fontSize: { md: "3rem", xs: "1.9rem" },
                                color: "#4E4E4E",
                                fontWeight: 800,
                                margin: "1.5rem 0px"
                            }}>
                                Audio List
                            </Typography>

                            {
                                AudioArray.map((item) => {
                                    return (
                                        <>
                                            <Box sx={{
                                                margin: "1rem 0px",
                                                position: "relative"
                                            }}>
                                                <img src={item.img} width="50%" style={{ borderRadius: "10px" }} alt="" />
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
                                        </>
                                    )
                                })
                            }
                            <Box>

                            </Box>
                        </Grid>
                        <Grid item xs={5} md={5}>
                            <Typography component='h3' sx={{
                                fontSize: { md: "3rem", xs: "1.9rem" },
                                color: "#4E4E4E",
                                fontWeight: 800,
                                margin: "1.5rem 0px"
                            }}>
                                Audio
                            </Typography>



                            <Box>
                                <img src={music.img} width="40%" style={{
                                    borderRadius: "10px"
                                }} alt="" />
                                <Typography sx={{
                                    fontSize: { md: "1rem", xs: "0.5rem" },
                                    color: "#4e4edf",
                                    textTransform: "capitalize",
                                    fontWeight: 600,
                                    fontFamily: "arial",

                                }}>
                                    {music.name}
                                </Typography>
                                <ArrowLeftIcon />
                                <audio controls>
                                    <source src={music.audiolink} type='audio/mp3' />
                                </audio>
                                <ArrowRightIcon />
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>


        </>
    )
}

export default Audioss