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
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItemType[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('cart');
        if (saved) {
            try {
                setCart(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (item: CartItemType) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            let newCart;
            if (existing) {
                newCart = prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
            } else {
                newCart = [...prev, item];
            }
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => {
            const newCart = prev.filter(i => i.id !== id);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const updateQty = (id: string, qty: number) => {
        setCart(prev => {
            const newCart = prev.map(i => i.id === id ? { ...i, qty } : i);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount }}>
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
