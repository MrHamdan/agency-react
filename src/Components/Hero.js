import { Box, Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import person from '../Images/men.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '98px' }}>
            <Box sx={{
                position: 'absolute',
                display:{xs:'none',lg:'block',md:'none'},
                width: { lg:'309.94px',xs:'200px'},
                height: { lg:'818.86px',xs:'200px'},
                left: { lg:'431px',xs:'100px'},
                top: '-29px',
                background: 'linear-gradient(180deg, rgba(84, 84, 212, 0.40) 0%, rgba(84, 84, 212, 0.1134) 100%)',
                filter: 'blur(199.107px)',
                borderRadius: '154.972px',
                transform: 'rotate(-54.37deg)',
                '&::before': {
                    content: '""',
                    display:{xs:'none',lg:'block'},
                    position: 'absolute',
                    width: {lg:'309.94px',xs:'100px'},
                    height: { lg:'828.7px',xs:'100px'},
                    left: { lg:'296px',xs:'50px'},
                    top: {lg:'620px'},
                    background: 'linear-gradient(rgba(251, 168, 28, 0.30) 0%, rgba(224, 86, 136, 0.063) 100%)',
                    filter: 'blur(199.107px)',
                    borderRadius: '154.972px',
                    transform: 'rotate(286deg)',
                }
            }}>

            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={8} md={6}>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: { lg: '53px', xs: '40px' },
                            color: 'white',
                            paddingBottom: '15px',
                            paddingTop: '20px',
                            lineHeight: '1.2'
                        }}>Build Your <br /> Awesome <br /> Platform</Typography>
                        <Typography sx={{ fontWeight: 'normal', fontSize: '18px', color: 'white' }}>Enver studio is a digital studio that offers several services <br /> such as UI/UX Design to developers, we will provide the best <br /> service for those of you who use our services.</Typography>
                        <Button variant="contained" sx={{
                            marginTop: '30px',
                            backgroundColor: '#5454D4',
                            padding: '10px 20px', '&:hover': {
                                backgroundColor: '#5254D4',
                            }
                        }}>Our Services <ArrowForwardIcon sx={{ transform: 'rotate(-35deg)', margin: '0px 3px' }} /> </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4} md={6} >
                        <Box sx={{
                            marginTop:{xs:'70px'},
                            position: 'relative',
                            '&::before': {
                                position: 'absolute',
                                content: '" "',
                                border: '1px solid #fff',
                                height: '249px',
                                width: '249px',
                                left: {
                                    lg: '50px',
                                    xs: '50px',
                                    md: '52px'
                                },
                                bottom: '36px',
                                transform: 'rotate(24deg)',
                                borderRadius: '10px',
                                background: '#5454D4',
                                top: '137px'


                            },
                            '&::after': {
                                content: '""',
                                height: '249px', width: '249px',
                                position: 'absolute',

                                border: '1px solid #fff',
                                left: { lg: '20px', xs: '40px', md: '30px' },
                                bottom: '84px',
                                transform: 'rotate(24deg)',
                                borderRadius: '10px',
                                zIndex: '-1'
                            }



                        }}>
                            <Box sx={{
                                border: 'solid rgb(255, 255, 255)',
                                borderWidth: '0 3px 3px 0',
                                display: 'inline-block',
                                padding: '10px',
                                transform: 'rotate(-135deg)',
                                position: 'absolute',
                                left: {
                                    lg: '-50px',
                                    xs: '16px',
                                    md:'-30px'
                                },
                                top: { lg: '20px', md: '50px', xs: '30px' },
                                '&::before': {
                                    content: '""',
                                    border: 'solid rgb(255, 255, 255)',
                                    borderWidth: '0 3px 3px 0',
                                    display: 'inline-block',
                                    padding: '10px',
                                    position: 'absolute',
                                    left: '-21px',
                                    bottom: '-24px',
                                },
                                '&::after': {
                                    content: '""',
                                    border: 'solid rgb(255, 255, 255)',
                                    borderWidth: '0 0px 3px 0',
                                    display: 'inline-block',
                                    padding: '10px',
                                    position: 'absolute',
                                    left: '20px',
                                    top: '-21px',
                                }
                            }}  >

                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: '27px',
                                    height: '53px',
                                    left: { lg: '-50px', xs: '10px', md: '-20px' },
                                    right: ' 0px',
                                    top: { lg: '350px', xs: '380px' },
                                    borderLeft: '3.65476px solid #E7E7E7',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '53px',
                                        height: '-9.42px',
                                        left: '-7px',
                                        right: '-2px',
                                        top: '38px',
                                        borderTop: '3.65476px solid #E7E7E7',
                                        transform: 'rotate(-32deg)'
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '50px',
                                        height: '32.58px',
                                        left: '1px',
                                        right: '-8px',
                                        top: '-16px',
                                        borderBottom: '3.65476px solid #E7E7E7',
                                        transform: 'rotate(30deg)'
                                    }

                                }}

                            ></Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: '27px',
                                    height: '53px',
                                    left: { lg: '-40px', md: '-10px', xs: '20px' },
                                    right: '0px',
                                    top: { lg: '371px', xs: '400px' },
                                    borderLeft: "1.65476px solid #E7E7E7",
                                    borderRadius: '2px',
                                    transform: 'rotate()',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '51px',
                                        height: '-12.42px',
                                        left: '-5px',
                                        right: '-2px',
                                        top: '39px',
                                        borderTop: '1.65476px solid #E7E7E7',
                                        transform: 'rotate(-30deg)'
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '52px',
                                        height: '26.58px',
                                        left: '2px',
                                        right: '-8px',
                                        top: '-11px',
                                        borderBottom: '1.65476px solid #E7E7E7',
                                        transform: 'rotate(30deg)'
                                    }
                                }}
                            >

                            </Box>
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    border: '3px solid #fff',
                                    borderRadius: '50% ',
                                    position: 'absolute',
                                    fontWeight: 'bold',
                                    left: { lg: '350px', xs: '270px', md: '330px' },
                                    top: { lg: '0px', xs: '20px', md: '30px' },
                                    '&::before': {
                                        content: '""',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        top: { lg: '15px', xs: '20px', md: '20px' },
                                        left: '10px',
                                        border: '3px solid #fff',
                                        opacity: '0.5'
                                    }
                                }}
                            >

                            </Box>
                            <Box
                                sx={{
                                    background: 'rgb(255, 255, 255)',
                                    height: '38px',
                                    position: 'absolute',
                                    width: '5px',
                                    top: { lg: '390px', xs: '400px' },
                                    left: { lg: '370px', xs: '310px', md: '360px' },
                                    borderRadius: '2px',
                                    '&::before': {
                                        background: 'rgb(255, 255, 255)',
                                        content: '""',
                                        height: '5px',
                                        left: '-17px',
                                        position: 'absolute',
                                        top: '16px',
                                        width: '39px',
                                        borderRadius: '2px',
                                    }
                                }}
                            ></Box>
                            <img style={{
                                clipPath: 'polygon(71% -6%, 76% 3%, 98% -8%, 102% 55%, 82% 88%, 74% 101%, 32% 87%, 12% 80%, -3% 54%, 20% 9%)'
                            }} src={person} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Hero;