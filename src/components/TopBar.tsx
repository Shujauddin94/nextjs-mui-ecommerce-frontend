'use client';
import React from 'react';
import { Box, Typography, Select, MenuItem, IconButton, Paper, Checkbox, FormControlLabel } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

interface TopBarProps {
    view: 'grid' | 'list';
    onViewChange: (v: 'grid' | 'list') => void;
}

export default function TopBar({ view, onViewChange }: TopBarProps) {
    return (
        <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 1, px: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 2 }}>
            <Box>
                <Typography variant="body1">12,911 items in <span style={{ fontWeight: 'bold' }}>Mobile accessory</span></Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={2}>
                <FormControlLabel control={<Checkbox size="small" />} label="Verified only" />

                <Select
                    value="Featured"
                    size="small"
                    sx={{ height: 36, minWidth: 120 }}
                    variant="outlined"
                >
                    <MenuItem value="Featured">Featured</MenuItem>
                    <MenuItem value="PriceLow">Price: Low to High</MenuItem>
                    <MenuItem value="PriceHigh">Price: High to Low</MenuItem>
                </Select>

                <Box border="1px solid #E0E0E0" borderRadius={1} display="flex">
                    <IconButton
                        size="small"
                        onClick={() => onViewChange('list')}
                        sx={{ bgcolor: view === 'list' ? '#E3F0FF' : 'transparent', borderRadius: '4px 0 0 4px' }}
                    >
                        <ViewListIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={() => onViewChange('grid')}
                        sx={{ bgcolor: view === 'grid' ? '#E3F0FF' : 'transparent', borderRadius: '0 4px 4px 0' }}
                    >
                        <GridViewIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    );
}
