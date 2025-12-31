'use client';
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Rating, IconButton, Button, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
    view: 'grid' | 'list';
    title: string;
    price: string;
    originalPrice: string;
    rating: number;
    orders: number;
    image: string;
    description?: string;
    productId?: string;
}

export default function ProductCard({ view, title, price, originalPrice, rating, orders, image, description, productId }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart({
            id: productId || Math.random().toString(),
            title,
            price: parseFloat(price),
            image,
            qty: 1
        });
    };

    const handleCardClick = () => {
        if (productId) {
            window.location.href = `/product/${productId}`;
        }
    };

    if (view === 'grid') {
        return (
            <Card
                elevation={0}
                sx={{
                    border: '1px solid #E0E0E0',
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: 2
                    }
                }}
                onClick={handleCardClick}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                    <img src={image} alt={title} style={{ height: 180, objectFit: 'contain' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold">${price}</Typography>
                            {originalPrice && (
                                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                                    ${originalPrice}
                                </Typography>
                            )}
                        </Box>
                        <IconButton
                            size="small"
                            sx={{ border: '1px solid #E0E0E0' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FavoriteBorderIcon fontSize="small" color="primary" />
                        </IconButton>
                    </Box>

                    <Rating value={rating} readOnly size="small" sx={{ mb: 1 }} />
                    <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 2 }}>{title}</Typography>

                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        size="small"
                        startIcon={<ShoppingCartOutlinedIcon />}
                        onClick={handleAddToCart}
                        sx={{ mt: 'auto' }}
                    >
                        Add to cart
                    </Button>
                </CardContent>
            </Card>
        );
    }

    // List View
    return (
        <Card elevation={0} sx={{ border: '1px solid #E0E0E0', borderRadius: 2, display: 'flex', mb: 2, p: 2 }}>
            <Box sx={{ width: 200, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 3 }}>
                <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>{title}</Typography>
                <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Typography variant="h5" fontWeight="bold">${price}</Typography>
                    {originalPrice && (
                        <Typography variant="body1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                            ${originalPrice}
                        </Typography>
                    )}
                </Box>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Rating value={rating} readOnly size="small" />
                    <Typography variant="body2" color="#FF9017">{rating.toFixed(1)}</Typography>
                    <Box sx={{ width: 6, height: 6, bgcolor: '#DBDBDB', borderRadius: '50%' }} />
                    <Typography variant="body2" color="text.secondary">{orders} orders</Typography>
                    <Box sx={{ width: 6, height: 6, bgcolor: '#DBDBDB', borderRadius: '50%' }} />
                    <Typography variant="body2" color="#00B517">Free Shipping</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
                    {description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                </Typography>
                <Typography variant="body2" color="primary" sx={{ mb: 1 }}>View details</Typography>
            </Box>
            <Box sx={{ width: 40, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <IconButton size="large" sx={{ border: '1px solid #E0E0E0' }}>
                    <FavoriteBorderIcon color="primary" />
                </IconButton>
            </Box>
        </Card>
    );
}
