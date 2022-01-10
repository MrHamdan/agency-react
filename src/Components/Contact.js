import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const Contact = () => {
    return (
        <Box sx={{
            padding:'124px 0',
            background: 'rgba(30, 30, 32, 0.5)',
        }}>
        <Container>
            <Grid container spacing={2}>
                <Grid xs={12} sm={12} md={7}>
                    <Typography variant='h3'
                         sx={{
                            fontSize:'39.8214px',
                            fontWeight:'bold',
                            color:'#fff',
                            lineHeight:'53px',
                            
                            
                        }}
                    >
                    Contact us for the service <br/> you want to use
                    </Typography>
                </Grid>
                <Grid xs={12} sm={12} md={3}
                sx={{
                    marginLeft:'120px'
                }}>
                <Button
                         sx={
                             {color:'#fff',
                             fontSize:'13px',
                             border:'1px solid #5454D4',
                             px:3,
                             background:'#5454D4',
                             fontWeight: '400',
                             marginTop:'30px',
                             marginLeft:'80px'
                         }}
                        >Contact us</Button>
                </Grid>
            </Grid>
        </Container>
        </Box>
    );
};

export default Contact;