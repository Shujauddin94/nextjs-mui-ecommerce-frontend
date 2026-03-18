'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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

    const searchParams = useSearchParams();

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        const typeParam = searchParams.get('type');

        const newFilters = { ...filters };
        let hasChanges = false;

        if (categoryParam && categoryParam !== 'All') {
            // Map some Hero categories to internal categories
            if (categoryParam.includes('Clothes')) {
                newFilters.categories = ['Clothing'];
            } else if (categoryParam.includes('Tech') || categoryParam.includes('Computer')) {
                newFilters.categories = ['Tech', 'Laptop', 'Mobile', 'Watch', 'Audio']; // Add all techy ones
            } else if (categoryParam.includes('Home')) {
                newFilters.categories = ['Furniture'];
            } else {
                newFilters.categories = [categoryParam];
            }
            hasChanges = true;
        }

        // Deal with Hot offers separately or as a filter?
        // Current Filter logic doesn't have 'hot'. Let's add it.
        // We'll handle 'type=hot' in the useMemo below directly or add a 'type' to filters.

        setFilters(prev => hasChanges ? { ...prev, ...newFilters } : prev);

    }, [searchParams]);

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(p => {
            // Hot Filter
            const typeParam = searchParams.get('type');
            if (typeParam === 'hot' && (p.discount || 0) <= 0) return false;

            // Category Filter
            if (filters.categories.length > 0) {
                // Check if any selected category matches product category
                // Or 'Tech' umbrella matches specific tech
                const isTech = ['Mobile', 'Laptop', 'Tech', 'Watch', 'Audio'].includes(p.category);
                if (filters.categories.includes('Tech') && isTech) return true;

                if (!filters.categories.includes(p.category)) return false;
            }
            // Price Filter
            if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;

            // Brand Filter
            if (filters.brands.length > 0) {
                const brandMatch = filters.brands.some(b => p.title.toLowerCase().includes(b.toLowerCase()));
                if (!brandMatch) return false;
            }
            return true;
        });
    }, [filters, searchParams]);

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
                    <MuiLink underline="hover" color="inherit" href="#">{filters.categories.length > 0 ? filters.categories.join(', ') : 'All Categories'}</MuiLink>
                    <Typography color="text.primary">{filters.categories.length > 0 ? `${filters.categories[0]} Items` : 'All Products'}</Typography>
                </Breadcrumbs>

                <Box display="flex">
                    {/* Sidebar */}
                    <FilterSidebar onFilterChange={handleFilterChange} />

                    {/* Main Content */}
                    <Box flexGrow={1}>
                        <TopBar
                            view={view}
                            onViewChange={setView}
                            totalItems={filteredProducts.length}
                            category={filters.categories.length > 0 ? filters.categories[0] : 'All Products'}
                        />

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
