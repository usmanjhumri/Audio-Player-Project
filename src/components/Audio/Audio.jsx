import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import AudioArray from './AudioArray'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { changeMusic, nextItem, prevItem, setCurrentItem, setIsplaying } from '../../RTK/AudioSlice/AudioSlice';
const Audioss = () => {
    const [clickId, setClickId] = useState(0)
    const AudioSlice = useSelector((store) => store.AudioSlice.value)
    const currentSong = useSelector((store) => store.AudioSlice.value)
    const { currentTrack } = useSelector((store) => store.AudioSlice)

    console.log(currentSong, ' currentSong');
    console.log(AudioSlice, ' audioslice')

    const reference = useRef()

    const list = Array.isArray(useSelector((store) => store.AudioSlice.value)) ?
        useSelector((store) => store.AudioSlice.value) : []

    const dispatch = useDispatch()
    const index = list.findIndex((item) => {
        console.log(clickId, ' id');
        return item.id === clickId
    })

    console.log(index, ' index ');

    const isPrevious = () => {
        dispatch(prevItem())
        reference.current.src = AudioSlice[currentTrack - 1].file
        reference.current.play()

    }
    const handleClickItem = (ind) => {
        dispatch(setCurrentItem(ind))
    }
    const isNext = () => {
        dispatch(nextItem())
        reference.current.src = AudioSlice[currentTrack + 1].file
        reference.current.play()
    }
    const reloadMusic = () => {
        const audioPlayer = document.getElementById('audio')
        audioPlayer.load()
        audioPlayer.play()

    }
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
                            AudioArray.map((item, index) => {
                                return (
                                    <>
                                        <Grid item xs={12} md={3}>



                                            <Box onClick={() => handleClickItem(index)
                                                // reference.current.src = AudioSlice.file    
                                            } sx={{
                                                margin: "1rem 0px",
                                                position: "relative",

                                            }}

                                            >
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
                                                    fontSize: { md: "10em", xs: "20em" },
                                                    position: "absolute",
                                                    opacity: 0.8,
                                                    // zIndex: 1,
                                                    left: "20%",
                                                    top: "5%"
                                                }} />
                                                {/* <PauseIcon sx={{
                                                    color: "#2ee3fe",
                                                    fontSize: { md: "10em", xs: "20em" },
                                                    position: "absolute",
                                                    opacity: 0.8,
                                                    // zIndex: 1,
                                                    left: "20%",
                                                    top: "5%"
                                                }} /> */}

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

                        <Grid item xs={12} md={12}>
                            <Typography component='h3' sx={{
                                fontSize: { md: "3rem", xs: "1.9rem" },
                                color: "#4E4E4E",
                                fontWeight: 800,
                                margin: "1.5rem 0px"
                            }}>
                                Audio
                            </Typography>

                            <Box textAlign="center" marginBottom="2rem">
                                <img src={AudioSlice[currentTrack]?.img} width="20%" style={{
                                    borderRadius: "10px",

                                }} alt="" />
                                <Typography sx={{
                                    fontSize: { md: "1rem", xs: "0.5rem" },
                                    color: "#4e4edf",
                                    textTransform: "capitalize",
                                    fontWeight: 600,
                                    fontFamily: "arial",

                                }}>
                                    {AudioSlice[currentTrack]?.name}
                                </Typography>
                                <Box sx={{
                                    margin: "auto",
                                    background: "#1e1e",
                                    width: "fit-content"
                                }}>
                                    <div onClick={isPrevious}>
                                        <ArrowLeftIcon sx={{
                                            fontSize: "3.5rem",
                                            cursor: "pointer"

                                        }} />
                                    </div>
                                    <audio src={AudioSlice[currentTrack]?.audiolink} ref={reference} type="audio/mpeg" controls />
                                    {/* <audio id="audio1" preload="auto" ref={reference}>
                                        <source src={AudioSlice[currentTrack].file} type="audio/mpeg" />
                                    </audio> */}

                                    <div onClick={isNext}>
                                        <ArrowRightIcon sx={{
                                            fontSize: "3.5rem",
                                            cursor: "pointer"


                                        }} />
                                    </div>
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