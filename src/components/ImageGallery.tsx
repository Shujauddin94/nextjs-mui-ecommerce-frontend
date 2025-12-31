'use client';
import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [selected, setSelected] = useState(images[0]);

    useEffect(() => {
        if (images.length > 0) setSelected(images[0]);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <Box>
            <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', p: 2, mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, borderRadius: 2 }}>
                <img src={selected} alt="Product" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </Paper>
            <Box display="flex" gap={1} overflow="auto">
                {images.map((img, idx) => (
                    <Paper
                        key={idx}
                        elevation={0}
                        onClick={() => setSelected(img)}
                        sx={{
                            border: selected === img ? '2px solid #0D63D1' : '1px solid #E0E0E0',
                            p: 1,
                            width: 60,
                            height: 60,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            borderRadius: 1
                        }}
                    >
                        <img src={img} alt="thumb" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
