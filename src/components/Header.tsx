'use client';

import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Box, InputBase, Select, MenuItem, Button, IconButton, Badge, Container
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useCart } from '@/context/CartContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        flexGrow: 1,
        maxWidth: 600,
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: 80,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 2),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const ActionButton = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#8B96A5',
    marginLeft: theme.spacing(2),
    '&:hover': {
        color: theme.palette.primary.main,
    },
    '& p': {
        fontSize: 12,
        margin: 0,
        marginTop: 4,
    },
}));

export default function Header() {
    const [category, setCategory] = useState('All');
    const { cartCount } = useCart();

    return (
        <AppBar position="sticky" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ height: 86, justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, color: '#1C1C1C' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: '#0D63D1',
                                fontWeight: 'bold',
                                display: { xs: 'none', sm: 'block' },
                                cursor: 'pointer'
                            }}
                        >
                            Brand
                        </Typography>
                    </Box>

                    {/* Search Bar - Desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                        <Search>
                            <Select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                variant="standard"
                                disableUnderline
                                sx={{
                                    minWidth: 100,
                                    borderRight: '1px solid #E0E0E0',
                                    pl: 2,
                                    height: '100%',
                                    '& .MuiSelect-select': { display: 'flex', alignItems: 'center' }
                                }}
                            >
                                <MenuItem value="All">All category</MenuItem>
                                <MenuItem value="Electronics">Electronics</MenuItem>
                                <MenuItem value="Clothes">Clothes</MenuItem>
                            </Select>
                            <StyledInputBase
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <SearchIconWrapper onClick={() => window.location.href = '/products'}>
                                <SearchIcon />
                                <Typography variant="button" sx={{ ml: 1, textTransform: 'capitalize' }}>Search</Typography>
                            </SearchIconWrapper>
                        </Search>
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ActionButton>
                            <PersonOutlineIcon />
                            <Typography>Profile</Typography>
                        </ActionButton>
                        <ActionButton>
                            <ChatBubbleOutlineIcon />
                            <Typography>Message</Typography>
                        </ActionButton>
                        <ActionButton>
                            <FavoriteBorderIcon />
                            <Typography>Orders</Typography>
                        </ActionButton>
                        <ActionButton>
                            <Badge badgeContent={cartCount} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                            <Typography>My cart</Typography>
                        </ActionButton>
                    </Box>
                </Toolbar>

                {/* Mobile Search - Visible only on small screens below AppBar */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, pb: 2 }}>
                    <InputBase
                        fullWidth
                        placeholder="Search..."
                        startAdornment={<SearchIcon sx={{ color: 'gray', mr: 1 }} />}
                        sx={{
                            bgcolor: '#F7FAFC',
                            borderRadius: 1,
                            p: 1,
                            border: '1px solid #E3E8EE'
                        }}
                    />
                </Box>
            </Container>

            {/* Secondary Navbar */}
            <Box sx={{ borderTop: '1px solid #E3E8EE', bgcolor: 'white', display: { xs: 'none', md: 'block' } }}>
                <Container maxWidth="lg">
                    <Toolbar variant="dense" sx={{ minHeight: 48, gap: 4 }}>
                        <Button startIcon={<MenuIcon />} sx={{ fontWeight: 600, color: 'text.primary' }} onClick={() => window.location.href = '/products'}>
                            All category
                        </Button>
                        <Button color="inherit" sx={{ fontWeight: 400 }}>Hot offers</Button>
                        <Button color="inherit" sx={{ fontWeight: 400 }}>Gift boxes</Button>
                        <Button color="inherit" sx={{ fontWeight: 400 }}>Projects</Button>
                        <Button color="inherit" sx={{ fontWeight: 400 }}>Menu item</Button>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button color="inherit" endIcon={<MenuIcon />}>English, USD</Button>
                        <Button color="inherit" endIcon={<MenuIcon />}>Ship to 🇩🇪</Button>
                    </Toolbar>
                </Container>
            </Box>
        </AppBar>
    );
}
