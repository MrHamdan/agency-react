import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import portfolioOne from '../Images/portfolio-one.png';
import portfolioTwo from '../Images/portfolio-two.png';
import portfolioThree from '../Images/portfolio-three.png';

const Portfolio = () => {
    return (
        <Container sx={{ marginTop: '131px' }}>
            <Box sx={{
                position: 'absolute',
                display: { xs: 'none', lg: 'block', md: 'none' },
                width: { lg: '397.93px', xs: '100px' },
                height: { lg: '433.29px', xs: '100px' },
                left: { lg: '1300px', xs: '50px' },
                top: { lg: '2350px', xs: '50px' },
                background: 'linear-gradient(180deg, rgba(84, 84, 212, 0.3) 0%, rgba(84, 84, 212, 0.084) 100%)',
                filter: 'blur(199.107px)',
                borderRadius: '154.972px',
                transform: 'matrix(-0.58, -0.81, -0.81, 0.58, 0, 0)',
            }}>

            </Box>
            <Box sx={{
                position: 'relative',
            }}>
                <Box sx={{
                    background: 'rgb(255, 255, 255)',
                    height: '38px',
                    position: 'absolute',
                    width: '5px',
                    top: { lg: '-100px', xs: '-50px' },
                    left: { lg: '30px', xs: '10px' },
                    right: { lg: '30px', xs: '110px' },
                    borderRadius: '2px',
                    transform: 'rotate(25deg)',
                    '&::after': {
                        background: ' rgb(255, 255, 255)',
                        content: '""',
                        height: '5px',
                        left: '-17px',
                        position: 'absolute',
                        top: '16px',
                        width: '39px',
                        borderRadius: '2px',
                    }
                }}>

                </Box>
                <Box sx={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid #fff',
                    borderRadius: '50% ',
                    position: 'absolute',
                    fontWeight: 'bold',
                    left: { lg: '1050px', xs: '270px', md: '750px' },
                    top: { lg: '60px', xs: '40px' },
                    '&::before': {
                        content: '""',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '15px',
                        left: '10px',
                        border: '3px solid #fff',
                        opacity: '0.5'
                    }
                }}>

                </Box>
                <Box sx={{
                    border: 'solid rgb(255, 255, 255)',
                    borderWidth: '0 3px 3px 0',
                    display: 'inline-block',
                    padding: '10px',
                    transform: 'rotate(-135deg)',
                    position: 'absolute',
                    left: {
                        lg: '30px',
                        xs: '36px',
                        md: '20px'
                    },
                    top: { lg: '650px', md: '500px', xs: '1200px' },
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
                }}>

                </Box>
                <Box sx={{
                    background: '#5454D4',
                    height: ' 0',
                    width: '13px',
                    padding: ' 4px',
                    position: 'absolute',
                    left: '51%',
                    borderRadius: ' 10px',
                    top: { lg: '660px ', xs: '1200px', md: '500px' },
                    '&::before': {
                        content: '""',
                        height: '5px',
                        width: '5px',
                        background: '#121213',
                        position: 'absolute',
                        right: '-20px',
                        top: '2px',
                        borderRadius: '5px',
                    },
                    '&::after': {
                        content: '""',
                        height: '5px',
                        width: '5px',
                        background: '#121213',
                        position: 'absolute',
                        right: '-11px',
                        top: '2px;',
                        borderRadius: '5px',
                    }
                }}>

                </Box>
            </Box>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: { lg: '40px', xs: '20px' },
                color: 'white',
                paddingBottom: '15px',
                paddingTop: '20px',
                lineHeight: '1.2'
            }}>
                Our Awesome Portfolio
            </Typography>
            <Box sx={{ textAlign: 'center', marginTop: { lg: '61px', xs: '121px' } }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4} sx={{ padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={portfolioOne} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{ marginTop: { lg: '50px', xs: '20px' }, padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={portfolioTwo} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{ marginTop: { lg: '100px', xs: '20px' }, padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={portfolioThree} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Portfolio;