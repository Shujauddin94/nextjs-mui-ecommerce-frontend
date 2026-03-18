'use client';
import React from 'react';
import { Box, Paper, Typography, Button, TextField, Divider } from '@mui/material';
import { useCart } from '@/context/CartContext';
import { api } from '@/services/api';

export default function CheckoutSummary() {
    const { cart, cartTotal } = useCart();
    const tax = cart.length > 0 ? 14.00 : 0;
    const discount = 0; // Mock discount

    const handleCheckout = async () => {
        try {
            const orderData = {
                total: cartTotal + tax - discount,
                items: cart
            };
            await api.createOrder(orderData);
            alert('Order placed successfully!');
            // clearCart(); // If clearCart exists
        } catch (error) {
            console.error('Checkout failed', error);
            alert('Checkout failed. Please try again.');
        }
    };

    return (
        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 3, borderRadius: 2 }}>
            <Typography variant="subtitle1" color="text.secondary" mb={2}>Have a coupon?</Typography>
            <Box display="flex" mb={3}>
                <TextField size="small" placeholder="Add coupon" fullWidth sx={{ mr: 1 }} />
                <Button variant="outlined">Apply</Button>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="text.secondary">Subtotal:</Typography>
                <Typography color="text.secondary">${cartTotal.toFixed(2)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="text.secondary">Discount:</Typography>
                <Typography color="error">- ${discount.toFixed(2)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography color="text.secondary">Tax:</Typography>
                <Typography color="text.secondary">+ ${tax.toFixed(2)}</Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography variant="h6" fontWeight="bold">Total:</Typography>
                <Typography variant="h5" fontWeight="bold">${(cartTotal + tax - discount).toFixed(2)}</Typography>
            </Box>

            <Button
                fullWidth
                variant="contained"
                color="success"
                size="large"
                sx={{ py: 1.5, mb: 2, fontSize: 16 }}
                onClick={handleCheckout}
                disabled={cart.length === 0}
            >
                Checkout
            </Button>

            <Box display="flex" justifyContent="center" gap={2} mt={2} opacity={0.6}>
                {['visa', 'mastercard', 'paypal', 'amex'].map((pay) => (
                    <Box key={pay} width={34} height={22} bgcolor="#F4F4F4" border="1px solid #E0E0E0" borderRadius={0.5} />
                ))}
            </Box>
        </Paper>
    );
}
