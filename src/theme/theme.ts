'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    button: {
      textTransform: 'none',
      fontWeight: '600',
    },
    h6: {
      fontWeight: '600',
      fontSize: '1rem',
    }
  },
  palette: {
    primary: {
      main: '#0D63D1', // B2B Blue
      light: '#E3F0FF',
    },
    secondary: {
      main: '#FF9017', // Action Orange
    },
    background: {
      default: '#F7FAFC', // Light Gray Background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#8B96A5',
    },
    grey: {
      100: '#F7FAFC',
      200: '#EFF2F4',
      300: '#DEE2E7',
      400: '#BDC4CD',
      500: '#8B96A5',
      600: '#505050',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)', // Optional gradient or solid
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1C1C1C',
          boxShadow: 'none',
          borderBottom: '1px solid #E0E0E0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width: 600px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
        }
      }
    }
  },
});

export default theme;
