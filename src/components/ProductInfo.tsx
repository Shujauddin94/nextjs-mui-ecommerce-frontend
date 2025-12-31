'use client';
import React from 'react';
import { Box, Typography, Rating, Divider, Table, TableBody, TableRow, TableCell, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useCart } from '@/context/CartContext';

interface ProductInfoProps {
    product: {
        id: string;
        title: string;
        price: number;
        originalPrice: number;
        image: string;
        rating: number;
        orders: number;
    }
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty: 1,
            specs: 'Standard'
        });
        alert('Added to cart!');
    };

    return (
        <Box>
            <Typography variant="h6" color="#00B517" display="flex" alignItems="center" gap={1} mb={1}>
                <CheckIcon fontSize="small" /> In stock
            </Typography>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                {product.title}
            </Typography>

            <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Box display="flex">
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography variant="body2" color="#FF9017" ml={1}>{product.rating.toFixed(1)}</Typography>
                </Box>
                <Box width={6} height={6} bgcolor="#DBDBDB" borderRadius="50%" />
                <Typography variant="body2" color="text.secondary">32 reviews</Typography>
                <Box width={6} height={6} bgcolor="#DBDBDB" borderRadius="50%" />
                <Typography variant="body2" color="text.secondary">{product.orders} sold</Typography>
            </Box>

            <Box bgcolor="#FFF0DF" p={2} display="flex" justifyContent="space-between" mb={3}>
                <Box>
                    <Typography variant="h6" color="#FA3434" fontWeight="bold">${product.price.toFixed(2)}</Typography>
                    <Typography variant="caption" color="text.secondary">50-100 pcs</Typography>
                </Box>
                <Box sx={{ borderLeft: '1px solid #BDC1C8', mx: 2 }} />
                <Box>
                    <Typography variant="h6" fontWeight="bold">${(product.price * 0.9).toFixed(2)}</Typography>
                    <Typography variant="caption" color="text.secondary">100-700 pcs</Typography>
                </Box>
                <Box sx={{ borderLeft: '1px solid #BDC1C8', mx: 2 }} />
                <Box>
                    <Typography variant="h6" fontWeight="bold">${(product.price * 0.8).toFixed(2)}</Typography>
                    <Typography variant="caption" color="text.secondary">700+ pcs</Typography>
                </Box>
            </Box>

            <Table size="small" sx={{ mb: 2 }}>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{ border: 0, color: 'text.secondary', pl: 0 }}>Type:</TableCell>
                        <TableCell sx={{ border: 0 }}>Classic series</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ border: 0, color: 'text.secondary', pl: 0 }}>Material:</TableCell>
                        <TableCell sx={{ border: 0 }}>Plastic material</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ border: 0, color: 'text.secondary', pl: 0 }}>Design:</TableCell>
                        <TableCell sx={{ border: 0 }}>Modern nice</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Divider sx={{ my: 2 }} />

            <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleAdd}>
                Add to Cart
            </Button>
            <Button variant="outlined" color="primary">
                Message Seller
            </Button>
        </Box>
    );
}
