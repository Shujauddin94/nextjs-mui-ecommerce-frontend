'use client';
import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterLink = ({ children }: { children: React.ReactNode }) => (
    <Typography variant="body2" sx={{ color: '#8B96A5', mb: 1, cursor: 'pointer', '&:hover': { color: '#0D63D1' } }}>
        {children}
    </Typography>
);

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'white', pt: 8, pb: 4, mt: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Brand & Social */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h5" sx={{ color: '#0D63D1', fontWeight: 'bold', mb: 2 }}>
                            Brand
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Best information about the company gies here but now lorem ipsum is
                        </Typography>
                        <Box>
                            <IconButton><FacebookIcon /></IconButton>
                            <IconButton><TwitterIcon /></IconButton>
                            <IconButton><LinkedInIcon /></IconButton>
                            <IconButton><InstagramIcon /></IconButton>
                            <IconButton><YouTubeIcon /></IconButton>
                        </Box>
                    </Grid>

                    {/* Links Columns */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>About</Typography>
                        <FooterLink>About Us</FooterLink>
                        <FooterLink>Find store</FooterLink>
                        <FooterLink>Categories</FooterLink>
                        <FooterLink>Blogs</FooterLink>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Partnership</Typography>
                        <FooterLink>About Us</FooterLink>
                        <FooterLink>Find store</FooterLink>
                        <FooterLink>Categories</FooterLink>
                        <FooterLink>Blogs</FooterLink>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Information</Typography>
                        <FooterLink>Help Center</FooterLink>
                        <FooterLink>Money Refund</FooterLink>
                        <FooterLink>Shipping</FooterLink>
                        <FooterLink>Contact us</FooterLink>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>For Users</Typography>
                        <FooterLink>Login</FooterLink>
                        <FooterLink>Register</FooterLink>
                        <FooterLink>Settings</FooterLink>
                        <FooterLink>My Orders</FooterLink>
                    </Grid>

                    <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="body2" color="#8B96A5">
                            © 2023 Ecommerce.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
