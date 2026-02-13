//*
//*    Objetivo:
//*        Practicar navegación entre archivos
//*        Usar Go to Definition y Peek Definition
//*
//*    Tips:
//*        Go to Definition: F12
//*        Peek Definition: Alt + F12
//*        Go Back: Alt + ←
//*        Go to References: Shift + F12
//*
//*    Tareas:
//*        1. Colocar cursor en 'Product' (línea 14) y presionar F12
//*        2. Esto te llevará a extra/classes.ts
//*        3. Usar Alt + ← para volver
//*        4. Usar Alt + F12 para ver definición sin salir del archivo
//*        5. Usar Shift + F12 para ver todas las referencias de Product
//*

import { Product } from './extra/classes';


const laptop = new Product();
laptop.name = 'Laptop Dell XPS 15';
laptop.price = 1299.99;
laptop.category = 'Electrónica';

const smartphone = new Product();
smartphone.name = 'iPhone 15 Pro';
smartphone.price = 999.99;
smartphone.category = 'Smartphones';

const headphones = new Product();
headphones.name = 'Sony WH-1000XM5';
headphones.price = 349.99;
headphones.category = 'Audio';

const tablet = new Product();
tablet.name = 'iPad Pro 12.9"';
tablet.price = 1099.99;
tablet.category = 'Tablets';

function displayProduct(product: Product) {
    console.log(`${product.name} - $${product.price}`);
}

function applyDiscount(product: Product, percentage: number) {
    const discount = product.price * (percentage / 100);
    product.price -= discount;
    return product;
}

function filterByCategory(products: Product[], category: string) {
    return products.filter(p => p.category === category);
}

const allProducts = [laptop, smartphone, headphones, tablet];

console.log('=== Todos los productos ===');
allProducts.forEach(displayProduct);

console.log('\n=== Productos con 10% descuento ===');
const discountedLaptop = applyDiscount(laptop, 10);
displayProduct(discountedLaptop);
