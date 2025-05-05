import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProducts } from '../services/api.js';
import { FaSearch } from 'react-icons/fa';
import '../styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProducts(searchQuery);
      setProducts(data);
    } catch (error) {
      toast.error('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 500); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [searchQuery, fetchProducts]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleImageError = (e) => {
    // Prevent infinite loop of error handling
    if (e.target.src !== '/no-image.png') {
      e.target.src = '/no-image.png';
    }
  };

  return (
    <div className="product-list-container">
      <div className="search-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="loading-spinner" />
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <p className="brand">{product.brand}</p>
                <p className="category">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList; 