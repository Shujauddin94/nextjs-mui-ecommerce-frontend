'use client';
import React, { use, useState, useEffect } from 'react';
import { Box, Container, Breadcrumbs, Link as MuiLink, Typography, Paper, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import ProductInfo from '@/components/ProductInfo';
import SupplierCard from '@/components/SupplierCard';
import { PRODUCTS } from '@/data/mockData';
import { notFound } from 'next/navigation';
import { api, Product } from '@/services/api';

function ProductTabs({ product }: { product: any }) {
    const [tab, setTab] = React.useState('desc');

    return (
        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 3, borderRadius: 2, minHeight: 400 }}>
            <Box display="flex" borderBottom="1px solid #E0E0E0" mb={3} gap={4}>
                <Button
                    onClick={() => setTab('desc')}
                    color={tab === 'desc' ? 'primary' : 'inherit'}
                    sx={tab === 'desc' ? { borderBottom: '2px solid', borderRadius: 0, fontWeight: 'bold' } : {}}
                >
                    Description
                </Button>
                <Button
                    onClick={() => setTab('reviews')}
                    color={tab === 'reviews' ? 'primary' : 'inherit'}
                    sx={tab === 'reviews' ? { borderBottom: '2px solid', borderRadius: 0, fontWeight: 'bold' } : {}}
                >
                    Reviews
                </Button>
                <Button color="inherit">Shipping</Button>
                <Button color="inherit">About seller</Button>
            </Box>

            {tab === 'desc' && (
                <Box>
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            {product.description}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>

                    <Typography variant="h6" fontWeight="bold" gutterBottom>Technical Specifications</Typography>
                    <Box sx={{ border: '1px solid #E0E0E0', borderRadius: 1, mb: 4 }}>
                        <Grid container>
                            {[
                                { label: 'Model', value: '#8786867' },
                                { label: 'Style', value: 'Classic style' },
                                { label: 'Certificate', value: 'ISO-898921212' },
                                { label: 'Size', value: '34mm x 450mm x 19mm' },
                                // Only show memory for tech items
                                ...(product.category && ['Mobile', 'Laptop', 'Tech', 'Watch', 'Audio'].includes(product.category) ? [{ label: 'Memory', value: '36GB RAM' }] : []),
                            ].map((spec, idx) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={spec.label} sx={{
                                    display: 'flex',
                                    p: 1.5,
                                    bgcolor: idx % 2 === 0 ? '#EFF2F4' : 'transparent',
                                    borderBottom: '1px solid #E0E0E0'
                                }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ width: 120 }}>{spec.label}:</Typography>
                                    <Typography variant="body2" color="text.primary">{spec.value}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Typography variant="h6" fontWeight="bold" gutterBottom>Features</Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', p: 0, ml: 2 }}>Some great feature name here</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0, ml: 2 }}>Lorem ipsum dolor sit amet, consectetur </ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0, ml: 2 }}>Duis aute irure dolor in reprehenderit</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0, ml: 2 }}>Some great feature name here</ListItem>
                    </List>
                </Box>
            )}

            {tab === 'reviews' && (
                <Box>
                    <Typography variant="h6">Reviews</Typography>
                    <Typography color="text.secondary">No reviews yet.</Typography>
                </Box>
            )}
        </Paper>
    );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getProduct(id)
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Box p={5} textAlign="center">Loading...</Box>;

    if (!product) {
        return notFound();
    }

    return (
        <Box sx={{ bgcolor: '#F7FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <Container maxWidth="xl" sx={{ flexGrow: 1, py: 3 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                    <MuiLink underline="hover" color="inherit" href="/">Home</MuiLink>
                    <MuiLink underline="hover" color="inherit" href="/products">Products</MuiLink>
                    <Typography color="text.primary">{product.title}</Typography>
                </Breadcrumbs>

                <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 2, mb: 3, borderRadius: 2 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <ImageGallery images={[product.image]} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <ProductInfo product={product} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <SupplierCard />
                        </Grid>
                    </Grid>
                </Paper>

                <Grid container spacing={3}>
                    {/* Description / Reviews Tabs */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <ProductTabs product={product} />
                    </Grid>

                    {/* "You may like" Sidebar */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 2, borderRadius: 2 }}>
                            <Typography variant="h6" fontWeight="bold" mb={2}>You may like</Typography>
                            <List>
                                {PRODUCTS.slice(0, 5).map((item) => (
                                    <ListItem key={item.id} alignItems="flex-start" disableGutters sx={{ cursor: 'pointer' }} onClick={() => window.location.href = `/product/${item.id}`}>
                                        <ListItemAvatar>
                                            <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 1, borderRadius: 1, width: 60, height: 60 }}>
                                                <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                            </Paper>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.title}
                                            secondary={<Typography variant="body2" color="text.secondary">${item.price}</Typography>}
                                            sx={{ ml: 1, '& .MuiListItemText-primary': { fontSize: 14, fontWeight: 500 } }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
}
