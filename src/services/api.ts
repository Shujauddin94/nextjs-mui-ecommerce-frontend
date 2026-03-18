import axios from 'axios';
import { PRODUCTS, Product } from '@/data/mockData';

const API_URL = 'http://localhost:3001'; // Changed to 3001 to avoid conflict with Next.js on 3000

export { type Product };

export const api = {
    getProducts: async (): Promise<Product[]> => {
        try {
            const response = await axios.get(`${API_URL}/products`, { timeout: 2000 });
            if (Array.isArray(response.data)) {
                return response.data.map((p: any) => ({
                    ...p,
                    price: parseFloat(p.price),
                    originalPrice: p.originalPrice ? parseFloat(p.originalPrice) : 0,
                    id: p.id.toString(),
                }));
            }
            throw new Error("Invalid data format from API");
        } catch (error) {
            console.warn("Backend unavailable, using mock data:", error);
            return PRODUCTS;
        }
    },
    getProduct: async (id: string): Promise<Product> => {
        try {
            const response = await axios.get(`${API_URL}/products/${id}`, { timeout: 2000 });
            const p = response.data;
            if (p && p.id) {
                return {
                    ...p,
                    price: parseFloat(p.price),
                    originalPrice: p.originalPrice ? parseFloat(p.originalPrice) : 0,
                    id: p.id.toString(),
                };
            }
            throw new Error("Invalid product data from API");
        } catch (error) {
            console.warn(`Product ${id} not found in backend, searching mock data`);
            const mockProduct = PRODUCTS.find(p => p.id === id);
            if (mockProduct) return mockProduct;
            throw error;
        }
    },
    createOrder: async (orderData: any) => {
        try {
            const response = await axios.post(`${API_URL}/orders`, orderData);
            return response.data;
        } catch (error) {
            console.error("Failed to create order", error);
            return { success: false, message: "Order creation failed (Backend offline)" };
        }
    }
};
