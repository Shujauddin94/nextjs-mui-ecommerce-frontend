'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItemType {
    id: string;
    title: string;
    price: number;
    image: string;
    qty: number;
    specs?: string;
}

interface CartContextType {
    cart: CartItemType[];
    addToCart: (item: CartItemType) => void;
    removeFromCart: (id: string) => void;
    updateQty: (id: string, qty: number) => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItemType[]>([]);

    useEffect(() => {
        // Load from local storage if needed in future
    }, []);

    const addToCart = (item: CartItemType) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(i => i.id !== id));
    };

    const updateQty = (id: string, qty: number) => {
        setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    };

    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
