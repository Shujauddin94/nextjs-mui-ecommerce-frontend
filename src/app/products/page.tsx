'use client';
import React, { useState, useMemo } from 'react';
import { Box, Container, Breadcrumbs, Link as MuiLink, Typography, Pagination, Grid } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import TopBar from '@/components/TopBar';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/mockData';

export default function ProductsPage() {
    const [view, setView] = useState<'grid' | 'list'>('list');
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({ categories: [] as string[], brands: [] as string[], priceRange: [0, 2000] });

    const ITEMS_PER_PAGE = 6;

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(p => {
            // Category Filter
            if (filters.categories.length > 0 && !filters.categories.includes(p.category)) return false;
            // Price Filter
            if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;
            // Brand Filter (Mock logic as we don't have brand in data yet, assuming title contains brand)
            if (filters.brands.length > 0) {
                const brandMatch = filters.brands.some(b => p.title.toLowerCase().includes(b.toLowerCase()));
                if (!brandMatch) return false;
            }
            return true;
        });
    }, [filters]);

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const displayedProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const handleFilterChange = (newFilters: any) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
        setPage(1); // Reset to page 1 on filter change
    };

    return (
        <Box sx={{ bgcolor: '#F7FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <Container maxWidth="lg" sx={{ flexGrow: 1, py: 3 }}>
                {/* Breadcrumbs */}
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                    <MuiLink underline="hover" color="inherit" href="/">Home</MuiLink>
                    <MuiLink underline="hover" color="inherit" href="#">Category</MuiLink>
                    <Typography color="text.primary">All Products</Typography>
                </Breadcrumbs>

                <Box display="flex">
                    {/* Sidebar */}
                    <FilterSidebar onFilterChange={handleFilterChange} />

                    {/* Main Content */}
                    <Box flexGrow={1}>
                        <TopBar view={view} onViewChange={setView} />

                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Showing {displayedProducts.length} of {filteredProducts.length} results
                        </Typography>

                        {view === 'list' ? (
                            <Box>
                                {displayedProducts.map((prod) => (
                                    <div key={prod.id} onClick={() => window.location.href = `/product/${prod.id}`} style={{ cursor: 'pointer' }}>
                                        <ProductCard view="list" {...prod} originalPrice={prod.originalPrice.toString()} price={prod.price.toString()} />
                                    </div>
                                ))}
                            </Box>
                        ) : (
                            <Grid container spacing={2}>
                                {displayedProducts.map((prod) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={prod.id} onClick={() => window.location.href = `/product/${prod.id}`} style={{ cursor: 'pointer' }}>
                                        <ProductCard view="grid" {...prod} originalPrice={prod.originalPrice.toString()} price={prod.price.toString()} />
                                    </Grid>
                                ))}
                            </Grid>
                        )}

                        {filteredProducts.length === 0 && (
                            <Box py={10} textAlign="center">
                                <Typography variant="h6" color="text.secondary">No products found matching your filters.</Typography>
                            </Box>
                        )}

                        {totalPages > 1 && (
                            <Box display="flex" justifyContent="flex-end" mt={4}>
                                <Pagination
                                    count={totalPages}
                                    page={page}
                                    onChange={(e, p) => setPage(p)}
                                    variant="outlined"
                                    shape="rounded"
                                />
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
}
