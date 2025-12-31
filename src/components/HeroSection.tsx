'use client';
import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography, List, ListItemText, ListItemButton, Avatar } from '@mui/material';

const CATEGORIES = [
    'Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech',
    'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category'
];

export default function HeroSection() {
    return (
        <Container maxWidth="lg" sx={{ mt: 2 }}>
            <Paper elevation={0} sx={{ border: '1px solid #E3E8EE', p: 2 }}>
                <Grid container spacing={2}>
                    {/* Sidebar - Categories */}
                    <Grid size={{ xs: 12, md: 3, lg: 2.5 }}>
                        <List dense>
                            {CATEGORIES.map((cat, index) => (
                                <ListItemButton key={index} sx={{ borderRadius: 1, '&:hover': { bgcolor: '#E5F1FF', color: '#0D63D1' } }}>
                                    <ListItemText primary={cat} primaryTypographyProps={{ fontSize: 14 }} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Grid>

                    {/* Main Banner */}
                    <Grid size={{ xs: 12, md: 6, lg: 7 }}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                minHeight: 300,
                                backgroundImage: 'url(/assets/Image/backgrounds/Banner-board-800x420%202.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                p: 6,
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 300, mb: 2 }}>Latest trending</Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>Electronic items</Typography>
                            <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#f0f0f0' } }}>
                                Learn more
                            </Button>
                        </Box>
                    </Grid>

                    {/* User & Promo Card */}
                    <Grid size={{ xs: 12, md: 3, lg: 2.5 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
                            {/* User Welcome */}
                            <Paper elevation={0} sx={{ bgcolor: '#E3F0FF', p: 2, borderRadius: 2 }}>
                                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                    <Avatar sx={{ bgcolor: 'rgba(0,0,0,0.1)' }}>H</Avatar>
                                    <Box>
                                        <Typography variant="subtitle2">Hi, user</Typography>
                                        <Typography variant="subtitle2">let's get stated</Typography>
                                    </Box>
                                </Box>
                                <Button fullWidth variant="contained" size="small" sx={{ mb: 1 }}>Join now</Button>
                                <Button fullWidth variant="outlined" size="small" sx={{ bgcolor: 'white' }}>Log in</Button>
                            </Paper>

                            {/* Promo 1 */}
                            <Paper elevation={0} sx={{ bgcolor: '#F38332', p: 2, borderRadius: 2, color: 'white' }}>
                                <Typography width={140}>Get US $10 off with a new supplier</Typography>
                            </Paper>

                            {/* Promo 2 */}
                            <Paper elevation={0} sx={{ bgcolor: '#55BDC4', p: 2, borderRadius: 2, color: 'white' }}>
                                <Typography width={140}>Send quotes with supplier preferences</Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
