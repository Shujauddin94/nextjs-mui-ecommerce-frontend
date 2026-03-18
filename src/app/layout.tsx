import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import { CssBaseline } from "@mui/material";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Cloned with Next.js and MUI", // Add your own description here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CartProvider>
              <CssBaseline />
              {children}
            </CartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
