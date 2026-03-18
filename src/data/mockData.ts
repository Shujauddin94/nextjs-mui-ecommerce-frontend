export interface Product {
    id: string;
    category: 'Mobile' | 'Laptop' | 'Audio' | 'Watch' | 'Furniture' | 'Clothing' | 'Tools' | 'Tech';
    title: string;
    price: number;
    originalPrice: number;
    rating: number;
    orders: number;
    image: string;
    description: string;
    discount?: number;
}

const REAL_PRODUCTS: Product[] = [
    // --- MOBILE ---
    { id: 'm1', category: 'Mobile', title: 'Samsung Galaxy S20 (Refurbished)', price: 320.00, originalPrice: 450.00, rating: 4.2, orders: 32, image: '/assets/Image/tech/image 23.png', description: 'Samsung Galaxy smartphone with high-res display and all-day battery life.', discount: 20 },
    { id: 'm2', category: 'Mobile', title: 'Redmi Note 9 Pro', price: 280.00, originalPrice: 300.00, rating: 4.5, orders: 120, image: '/assets/Image/tech/image 33.png', description: 'Redmi Note 9 Pro with quad-camera system and fast charging.', discount: 10 },
    { id: 'm3', category: 'Mobile', title: 'iPad Pro 11-inch', price: 650.00, originalPrice: 699.00, rating: 4.8, orders: 88, image: '/assets/Image/tech/image 32.png', description: 'Apple iPad Pro with Liquid Retina display and Face ID.', discount: 5 },

    // --- LAPTOP ---
    { id: 'l1', category: 'Laptop', title: 'MacBook Pro 16"', price: 1200.00, originalPrice: 1450.00, rating: 4.9, orders: 12, image: '/assets/Image/tech/image 34.png', description: 'Powerful MacBook Pro for professionals, featuring the M1 chip and retina display.', discount: 15 },

    // --- AUDIO ---
    { id: 'a1', category: 'Audio', title: 'Gaming Headset Pro', price: 45.00, originalPrice: 60.00, rating: 4.1, orders: 320, image: '/assets/Image/tech/image 29.png', description: 'High-fidelity gaming headset with noise isolation and microphone.', discount: 25 },
    { id: 'a2', category: 'Audio', title: 'White Wireless Headphones', price: 35.00, originalPrice: 50.00, rating: 4.0, orders: 45, image: '/assets/Image/tech/image 86.png', description: 'Comfortable over-ear wireless headphones with long battery life.', discount: 30 },

    // --- WATCH ---
    { id: 'w1', category: 'Watch', title: 'Apple Watch Series 5', price: 399.00, originalPrice: 429.00, rating: 5.0, orders: 890, image: '/assets/Image/tech/8.png', description: 'The ultimate device for a healthy life. Tracks workouts, monitors heart rate, and streams music.' },

    // --- CAMERA ---
    { id: 'cam1', category: 'Tools', title: 'Canon EOS DSLR', price: 998.00, originalPrice: 1128.00, rating: 4.8, orders: 154, image: '/assets/Image/tech/6.png', description: 'Professional DSLR camera for photography enthusiasts.' },

    // --- FURNITURE / INTERIOR ---
    { id: 'i1', category: 'Furniture', title: 'Modern Beige Armchair', price: 120.00, originalPrice: 0, rating: 4.5, orders: 10, image: '/assets/Image/interior/1.png', description: 'Comfortable beige armchair with wooden legs, perfect for living rooms.' },
    { id: 'i2', category: 'Furniture', title: 'Modern Table Lamp', price: 45.00, originalPrice: 0, rating: 4.3, orders: 55, image: '/assets/Image/interior/6.png', description: 'Stylish table lamp with a grey textured base.' },
    { id: 'i3', category: 'Furniture', title: 'Espresso Machine', price: 150.00, originalPrice: 200.00, rating: 4.7, orders: 20, image: '/assets/Image/interior/8.png', description: 'Compact espresso machine for your daily coffee fix.', discount: 25 },
    { id: 'i4', category: 'Furniture', title: 'Clay Cooking Pot', price: 30.00, originalPrice: 0, rating: 4.6, orders: 8, image: '/assets/Image/interior/3.png', description: 'Traditional clay pot for slow cooking and authentic flavors.' },
    { id: 'i5', category: 'Furniture', title: 'Magazine Rack', price: 25.00, originalPrice: 0, rating: 4.9, orders: 21, image: '/assets/Image/interior/7.png', description: 'Leather and metal magazine rack for organizing reading materials.' },
    { id: 'i6', category: 'Furniture', title: 'Juice Blender', price: 39.00, originalPrice: 0, rating: 4.1, orders: 55, image: '/assets/Image/interior/9.png', description: 'High-speed blender for smoothies and juices.' },
    { id: 'i7', category: 'Furniture', title: 'Indoor Plant', price: 19.99, originalPrice: 0, rating: 3.9, orders: 10, image: '/assets/Image/interior/image 89.png', description: 'Decorative indoor plant to freshen up your space.' },
    { id: 'i8', category: 'Furniture', title: 'Air Mattress / Blue Sofa', price: 50.00, originalPrice: 0, rating: 4.4, orders: 120, image: '/assets/Image/interior/image 93.png', description: 'Versatile inflatable furniture for guests or camping.' },
    { id: 'i9', category: 'Furniture', title: 'Electric Kettle', price: 20.00, originalPrice: 35.00, rating: 4.3, orders: 150, image: '/assets/Image/tech/image 85.png', description: 'Sleek black electric kettle for quick boiling.', discount: 40 },

    // --- CLOTHING --- 
    { id: 'c1', category: 'Clothing', title: 'Winter Parka with Fur Hood', price: 120.00, originalPrice: 150.00, rating: 4.8, orders: 15, image: '/assets/Layout/alibaba/Image/cloth/2 1.png', description: 'Warm winter parka with faux fur hood for extreme cold.', discount: 20 },
    { id: 'c2', category: 'Clothing', title: 'Denim Backpack', price: 45.00, originalPrice: 60.00, rating: 4.7, orders: 110, image: '/assets/Layout/alibaba/Image/cloth/image 26.png', description: 'Stylish denim backpack, perfect for daily commute and travel.', discount: 25 },
    { id: 'c3', category: 'Clothing', title: 'Men\'s Blue Blazer', price: 85.00, originalPrice: 0, rating: 4.5, orders: 40, image: '/assets/Layout/alibaba/Image/cloth/image 30.png', description: 'Classic fit formal blazer in navy blue. Versatile for office or events.' },
    { id: 'c4', category: 'Clothing', title: 'Blue Leather Wallet', price: 29.00, originalPrice: 40.00, rating: 4.8, orders: 25, image: '/assets/Layout/alibaba/Image/cloth/image 24.png', description: 'Genuine leather wallet with multiple card slots.' },
    { id: 'c5', category: 'Clothing', title: 'Blue Jeans', price: 35.00, originalPrice: 0, rating: 4.0, orders: 200, image: '/assets/Layout/alibaba/Image/cloth/Bitmap (2).png', description: 'Comfortable regular fit blue jeans.' },
    { id: 'c6', category: 'Clothing', title: 'Classic Blue Polo', price: 25.00, originalPrice: 0, rating: 4.2, orders: 80, image: '/assets/Layout/alibaba/Image/cloth/Bitmap.png', description: 'Breathable cotton polo shirt in classic blue.' },
];

export const PRODUCTS: Product[] = [
    ...REAL_PRODUCTS,
    // Duplicate real products to create volume for pagination (approx 60 items)
    ...REAL_PRODUCTS.map(p => ({ ...p, id: p.id + '_dup1', title: p.title + ' (Deal)' })),
    ...REAL_PRODUCTS.map(p => ({ ...p, id: p.id + '_dup2', title: p.title + ' (Best)' })),
];

export const SUPPLIERS = [
    { id: 's1', name: 'Guanjoi Trading LLC', country: 'Germany, Berlin' },
    { id: 's2', name: 'Best Tech Store', country: 'USA, New York' },
    { id: 's3', name: 'Global Direct', country: 'China, Shenzhen' }
];
