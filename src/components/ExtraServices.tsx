'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const services = [
    {
        icon: LocalShippingOutlinedIcon,
        title: 'Fast & secure delivery',
        description: 'Tell about your service.'
    },
    {
        icon: AccountBalanceWalletOutlinedIcon,
        title: 'Money back guarantee',
        description: 'Within 10 days.'
    },
    {
        icon: HeadsetMicOutlinedIcon,
        title: '24 hour customer support',
        description: 'Friendly 24/7 support.'
    },
    {
        icon: VerifiedUserOutlinedIcon,
        title: 'Safe shopping',
        description: 'Your data is always protected.'
    }
];

export default function ExtraServices() {
    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            <Grid container spacing={2}>
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    border: '1px solid #E0E0E0',
                                    borderRadius: 2,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: '50%',
                                        bgcolor: '#F7FAFC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2
                                    }}
                                >
                                    <IconComponent sx={{ fontSize: 32, color: '#8B96A5' }} />
                                </Box>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
