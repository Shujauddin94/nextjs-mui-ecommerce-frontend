'use client';
import React from 'react';
import { Box, Paper, Typography, Avatar, Divider, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function SupplierCard() {
    return (
        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 2, borderRadius: 2 }}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Avatar sx={{ bgcolor: '#C6F3F1', color: '#4CA7A7' }}>R</Avatar>
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">Supplier</Typography>
                    <Typography variant="body2" color="text.secondary">Guanjoi Trading LLC</Typography>
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box display="flex" alignItems="center" gap={1} mb={1} color="text.secondary">
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">Germany, Berlin</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={3} color="text.secondary">
                <VerifiedUserIcon fontSize="small" />
                <Typography variant="body2">Verified Seller</Typography>
            </Box>

            <Button fullWidth variant="contained" sx={{ mb: 1 }}>Send inquiry</Button>
            <Button fullWidth variant="outlined">Seller's profile</Button>
        </Paper>
    );
}
