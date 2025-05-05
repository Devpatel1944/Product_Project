import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProductById } from '../services/api.js';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProductDetails = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      toast.error('Failed to fetch product details. Please try again later.');
      navigate('/');
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  const handleImageError = (e) => {
    // Prevent infinite loop of error handling
    if (e.target.src !== '/no-image.png') {
      e.target.src = '/no-image.png';
    }
  };

  if (loading) {
    return <div className="loading-spinner" />;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <FaArrowLeft /> Back to Search
      </button>

      <div className="product-details">
        <div className="product-image-large">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            onError={handleImageError}
            loading="lazy"
          />
        </div>

        <div className="product-info-detailed">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="brand">Brand: {product.brand}</p>
          <p className="category">Category: {product.category}</p>
          <div className="description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 