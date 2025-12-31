'use client';
import React from 'react';
import { Box, Typography, Button, MenuItem, Select } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface CartItemProps {
    image: string;
    title: string;
    price: number;
    qty: number;
    specs?: string;
    seller: string;
    onRemove?: () => void;
    onUpdateQty?: (qty: number) => void;
}

export default function CartItem({ image, title, price, qty, specs, seller, onRemove, onUpdateQty }: CartItemProps) {
    return (
        <Box display="flex" alignItems="flex-start" py={2} borderBottom="1px solid #E0E0E0">
            <Box sx={{ p: 1, border: '1px solid #E0E0E0', borderRadius: 2, width: 80, height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 2 }}>
                <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </Box>

            <Box flexGrow={1}>
                <Typography variant="h6" fontWeight="bold" fontSize={16} mb={0.5}>{title}</Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                    {specs}
                </Typography>
                <Typography variant="caption" color="text.secondary">Seller: {seller}</Typography>

                <Box mt={2}>
                    <Button size="small" variant="text" color="error" startIcon={<DeleteOutlineIcon />} onClick={onRemove}>Remove</Button>
                    <Button size="small" variant="text">Save for later</Button>
                </Box>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography variant="h6" fontWeight="bold" mb={1}>${price.toFixed(2)}</Typography>
                <Select
                    value={qty}
                    size="small"
                    sx={{ height: 32 }}
                    onChange={(e) => onUpdateQty && onUpdateQty(Number(e.target.value))}
                >
                    {[1, 2, 3, 4, 5, 10].map(nu => (
                        <MenuItem key={nu} value={nu}>Qty: {nu}</MenuItem>
                    ))}
                </Select>
            </Box>
        </Box>
    );
}
