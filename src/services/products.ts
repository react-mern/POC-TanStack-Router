import { notFound } from '@tanstack/react-router';

// Function to fetch all products with optional search parameters
export async function fetchProducts(title = '') {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=0&limit=10&title=${title}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data;
}

// Function to fetch a specific product by ID
export async function fetchProductById(productId: string) {
  const url = `https://api.escuelajs.co/api/v1/products/${productId}`;
  const response = await fetch(url);
  if (response.status == 400) {
    throw notFound();
  }
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  const data = await response.json();
  return data;
}
