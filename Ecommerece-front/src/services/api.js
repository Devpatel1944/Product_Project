import axios from 'axios';

const API_BASE_URL = '/api'; // Using the proxy configuration
const BACKEND_URL = 'http://localhost:8080'; // Backend base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to get full image URL
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  
  // If the image path is already a full URL, return it as is
  if (imagePath.startsWith('http')) return imagePath;
  
  // If the image path starts with a forward slash, remove it
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // If the image path already includes 'images/', don't add it again
  if (cleanPath.includes('images/')) {
    return `${BACKEND_URL}/${cleanPath}`;
  }
  
  // Construct the full URL to the backend's static images
  return `${BACKEND_URL}/static/images/${cleanPath}`;
};

export const getProducts = async (searchQuery = '') => {
  try {
    const response = await api.get(`/products${searchQuery ? `?search=${searchQuery}` : ''}`);
    // Transform the response to include full image URLs
    const products = response.data.map(product => ({
      ...product,
      imageUrl: getImageUrl(product.imageUrl)
    }));
    return products;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    // Transform the response to include full image URL
    const product = {
      ...response.data,
      imageUrl: getImageUrl(response.data.imageUrl)
    };
    return product;
  } catch (error) {
    throw error;
  }
};

export default api; 