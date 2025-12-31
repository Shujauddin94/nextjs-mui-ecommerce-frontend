'use client';
import React from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

export default function InquiryForm() {
    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Box sx={{
                backgroundImage: 'linear-gradient(to right, #2C7CF1, #00D1FF80), url(/assets/Image/backgrounds/Mask%20group.png)',
                backgroundSize: 'cover',
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                p: 4
            }}>
                <Grid container justifyContent="space-between">
                    <Grid size={{ xs: 12, md: 5 }} sx={{ color: 'white', py: 4 }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            An easy way to send requests to all suppliers
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper sx={{ p: 3, borderRadius: 2 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>Send quote to suppliers</Typography>
                            <TextField
                                fullWidth
                                placeholder="What item you need?"
                                variant="outlined"
                                size="small"
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Type more details"
                                variant="outlined"
                                size="small"
                                sx={{ mb: 2 }}
                            />
                            <Grid container spacing={2}>
                                <Grid size={6}>
                                    <TextField fullWidth placeholder="Quantity" size="small" type="number" />
                                </Grid>
                                <Grid size={6}>
                                    <TextField fullWidth placeholder="Pcs" size="small" select SelectProps={{ native: true }}>
                                        <option>Pcs</option>
                                        <option>Kg</option>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Button fullWidth variant="contained" size="large" sx={{ mt: 3 }}>
                                Send inquiry
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
