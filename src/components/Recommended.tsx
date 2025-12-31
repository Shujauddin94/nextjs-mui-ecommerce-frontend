'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Container, Typography, Grid } from '@mui/material';
import { PRODUCTS } from '@/data/mockData';

export default function Recommended() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>Recommended items</Typography>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 10 }}>
                {PRODUCTS.map((prod) => (
                    <Grid size={{ xs: 2, sm: 4, md: 2 }} key={prod.id}>
                        <Card
                            elevation={0}
                            onClick={() => window.location.href = `/product/${prod.id}`}
                            sx={{ border: '1px solid #E0E0E0', borderRadius: 2, cursor: 'pointer', height: '100%' }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={prod.image}
                                alt={prod.title}
                                sx={{ objectFit: 'contain', p: 2 }}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight="bold">${prod.price.toFixed(2)}</Typography>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {prod.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
