'use client';
import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Product } from '@/data/mockData';

interface CategoryBlockProps {
    title: string;
    backgroundImage: string;
    items: Product[];
}

export default function CategoryBlock({ title, backgroundImage, items }: CategoryBlockProps) {
    return (
        <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Paper variant="outlined" sx={{ display: 'flex', overflow: 'hidden', flexDirection: { xs: 'column', md: 'row' } }}>
                {/* Banner Side */}
                <Box sx={{
                    width: { xs: '100%', md: 280 },
                    height: { xs: 200, md: 'auto' },
                    minHeight: 260,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    p: 3,
                    color: '#1C1C1C',
                    flexShrink: 0
                }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, width: 150 }}>{title}</Typography>
                    <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', mb: 2, boxShadow: 'none' }}>
                        Source now
                    </Button>
                </Box>

                {/* Grid Items */}
                <Grid container>
                    {items.slice(0, 8).map((item, idx) => (
                        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={idx}
                            onClick={() => window.location.href = `/product/${item.id}`}
                            sx={{
                                borderLeft: '1px solid #E0E0E0',
                                borderBottom: { xs: '1px solid #E0E0E0', md: idx < 4 ? '1px solid #E0E0E0' : 'none' },
                                cursor: 'pointer'
                            }}
                        >
                            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', height: 126 }}>
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>{item.title}</Typography>
                                    <Typography variant="caption" color="text.secondary">From<br />USD {item.price}</Typography>
                                </Box>
                                <img src={item.image} alt={item.title} style={{ height: 80, maxWidth: 80, objectFit: 'contain' }} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
}
