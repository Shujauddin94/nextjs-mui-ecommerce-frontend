'use client';
import React, { useState } from 'react';
import {
    Box, Typography, Accordion, AccordionSummary, AccordionDetails,
    FormControlLabel, Checkbox, Slider, Link, Rating, Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FilterSidebarProps {
    onFilterChange: (filters: any) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);

    const handleCategoryChange = (cat: string) => {
        const newCats = selectedCategories.includes(cat)
            ? selectedCategories.filter(c => c !== cat)
            : [...selectedCategories, cat];
        setSelectedCategories(newCats);
        onFilterChange({ categories: newCats, brands: selectedBrands, priceRange });
    };

    const handleBrandChange = (brand: string) => {
        const newBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        setSelectedBrands(newBrands);
        onFilterChange({ categories: selectedCategories, brands: newBrands, priceRange });
    };

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
        onFilterChange({ categories: selectedCategories, brands: selectedBrands, priceRange: newValue });
    };

    const categories = ['Mobile', 'Laptop', 'Audio', 'Watch', 'Furniture', 'Clothing', 'Tools'];

    return (
        <Box sx={{ width: 240, flexShrink: 0, mr: 3, display: { xs: 'none', md: 'block' } }}>
            {/* Category Filter */}
            <Accordion defaultExpanded elevation={0} disableGutters sx={{ '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" flexDirection="column" gap={1}>
                        {categories.map((cat) => (
                            <FormControlLabel
                                key={cat}
                                control={
                                    <Checkbox
                                        size="small"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                }
                                label={cat}
                            />
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Brand Filter */}
            <Accordion defaultExpanded elevation={0} disableGutters sx={{ '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Brands</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'].map((brand) => (
                        <FormControlLabel
                            key={brand}
                            control={
                                <Checkbox
                                    size="small"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                            }
                            label={brand}
                            sx={{ display: 'block', height: 30 }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            {/* Price Range */}
            <Accordion defaultExpanded elevation={0} disableGutters sx={{ '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Price range</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Slider
                        value={priceRange}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        max={2000}
                        size="small"
                    />
                    <Box display="flex" justifyContent="space-between" mt={1}>
                        <Box sx={{ border: '1px solid #E0E0E0', p: 1, borderRadius: 1, width: 80 }}>
                            <Typography variant="caption">Min</Typography>
                            <Typography variant="body2">{priceRange[0]}</Typography>
                        </Box>
                        <Box sx={{ border: '1px solid #E0E0E0', p: 1, borderRadius: 1, width: 80 }}>
                            <Typography variant="caption">Max</Typography>
                            <Typography variant="body2">{priceRange[1]}</Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
