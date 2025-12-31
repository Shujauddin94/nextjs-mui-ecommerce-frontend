'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Button, Grid } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import CheckoutSummary from '@/components/CheckoutSummary';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
    const { cart, removeFromCart, updateQty } = useCart();

    return (
        <Box sx={{ bgcolor: '#F7FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <Container maxWidth="xl" sx={{ flexGrow: 1, py: 4 }}>
                <Typography variant="h5" fontWeight="bold" mb={3} ml={1}>My cart ({cart.length})</Typography>

                <Grid container spacing={3}>
                    {/* Cart Items List */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 2, px: 3, pt: 1, pb: 3, mb: 3 }}>
                            {cart.length === 0 ? (
                                <Box py={4} textAlign="center">
                                    <Typography>Your cart is empty.</Typography>
                                </Box>
                            ) : (
                                cart.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        {...item}
                                        seller="Best Store" // Mock seller
                                        onRemove={() => removeFromCart(item.id)}
                                        onUpdateQty={(q) => updateQty(item.id, q)}
                                    />
                                ))
                            )}

                            <Box display="flex" justifyContent="space-between" mt={3} pt={2}>
                                <Button startIcon={<ArrowBackIcon />} sx={{
                                    bgcolor: '#127FFF', color: 'white', px: 3,
                                    '&:hover': { bgcolor: '#0058e6' }
                                }} onClick={() => window.location.href = '/products'}>
                                    Back to shop
                                </Button>
                                <Button variant="outlined" color="primary">Remove all</Button>
                            </Box>
                        </Paper>

                        {/* Saved for later */}
                        <Typography variant="h6" fontWeight="bold" mb={2}>Saved for later</Typography>
                        <Grid container spacing={2}>
                            {[1, 2, 3, 4].map((i) => (
                                <Grid size={{ xs: 6, sm: 3 }} key={i}>
                                    <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 2, p: 2 }}>
                                        <Box height={140} display="flex" justifyContent="center" alignItems="center" bgcolor="#F7FAFC" borderRadius={1} mb={2}>
                                            <img src={`/assets/Image/tech/image ${30 + i}.png`} alt="item" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                                        </Box>
                                        <Typography variant="subtitle1" fontWeight="bold">$99.50</Typography>
                                        <Typography variant="body2" color="text.secondary" noWrap>GoPro Hero 6 4K Action Camera - Black</Typography>
                                        <Button startIcon={<Box component="span" sx={{ fontSize: 18 }}>🛒</Box>} variant="outlined" fullWidth sx={{ mt: 1 }}>Move to cart</Button>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Checkout Summary */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <CheckoutSummary />
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
}
