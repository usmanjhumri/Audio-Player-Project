import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Audioss = () => {
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>


        </>
    )
}

export default Audioss