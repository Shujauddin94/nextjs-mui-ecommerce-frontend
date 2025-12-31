'use client';
import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { PRODUCTS } from '@/data/mockData';

// Function to generate countdown blocks
const TimerBlock = ({ value, label }: { value: string, label: string }) => (
    <Box sx={{
        bgcolor: '#606060', color: 'white', borderRadius: 1,
        width: 45, height: 50, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', mr: 1
    }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1 }}>{value}</Typography>
        <Typography variant="caption" sx={{ fontSize: 10 }}>{label}</Typography>
    </Box>
);

const DealItem = ({ id, image, name, discount }: { id: string, image: string, name: string, discount: number }) => (
    <Box
        onClick={() => window.location.href = `/product/${id}`}
        sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            p: 2, borderLeft: '1px solid #E0E0E0', flex: 1, cursor: 'pointer',
            minWidth: 140
        }}
    >
        <img src={image} alt={name} style={{ height: 100, marginBottom: 16, objectFit: 'contain' }} />
        <Typography variant="body2" sx={{ mb: 1, textAlign: 'center', height: 40, overflow: 'hidden' }}>{name}</Typography>
        <Box sx={{ bgcolor: '#FFE3E3', color: '#EB001B', borderRadius: 5, px: 2, py: 0.5 }}>
            <Typography variant="caption" fontWeight="bold">-{discount}%</Typography>
        </Box>
    </Box>
);

export default function DealsSection() {
    // Filter products that have a discount
    const deals = PRODUCTS.filter(p => p.discount && p.discount > 0).slice(0, 5);

    return (
        <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Paper variant="outlined" sx={{ display: 'flex', overflow: 'hidden', flexDirection: { xs: 'column', md: 'row' } }}>
                {/* Timer Column */}
                <Box sx={{ p: 2, width: { xs: '100%', md: 280 }, flexShrink: 0, borderRight: '1px solid #E0E0E0' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>Deals and offers</Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>Hygiene equipments</Typography>
                    <Box sx={{ display: 'flex', mt: 2 }}>
                        <TimerBlock value="04" label="Days" />
                        <TimerBlock value="13" label="Hour" />
                        <TimerBlock value="34" label="Min" />
                        <TimerBlock value="56" label="Sec" />
                    </Box>
                </Box>

                {/* Products (Horizontal) */}
                <Box sx={{ display: 'flex', flexGrow: 1, overflowX: 'auto' }}>
                    {deals.map((item) => (
                        <DealItem key={item.id} id={item.id} image={item.image} name={item.title} discount={item.discount || 0} />
                    ))}
                </Box>
            </Paper>
        </Container>
    );
}
