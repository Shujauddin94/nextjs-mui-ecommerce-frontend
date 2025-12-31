'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import DealsSection from "@/components/DealsSection";
import InquiryForm from "@/components/InquiryForm";
import ExtraServices from "@/components/ExtraServices";
import { Box, Container, Typography, Grid } from "@mui/material";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/mockData";

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#F7FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <HeroSection />

      <DealsSection />

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>Recommended items</Typography>
        <Grid container spacing={2}>
          {PRODUCTS.slice(0, 10).map((prod) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }} key={prod.id} display="flex">
              <ProductCard
                view="grid"
                title={prod.title}
                price={prod.price.toFixed(2)}
                originalPrice={prod.originalPrice ? prod.originalPrice.toFixed(2) : ''}
                rating={prod.rating}
                orders={prod.orders}
                image={prod.image}
                productId={prod.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <ExtraServices />

      <InquiryForm />

      <Footer />
    </Box>
  );
}
