import { Typography } from '@mui/material';
import React from 'react';

const Services = () => {
    return (
        <div>
            <Typography sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '39px',
                color: 'white',
                paddingBottom: '15px',
                paddingTop: '120px'
            }}>The Service We Provide</Typography>
            <Typography sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '39px',
                color: 'white',
                paddingBottom: '15px',
                marginTop: '-20px'
            }}>For You</Typography>
        </div>
    );
};

export default Services;