import React, { useEffect } from 'react';
import './Shop.css';

// Product Data Array
const products = [
  {
    id: 1,
    title: 'The Classic Blue',
    fit: 'Straight fit',
    price: '$62',
    defaultImg: '/assets/product-classic-blue.jpg',
    hoverImg: '/assets/jeans-lifestyle-2.jpg'
  },
  {
    id: 2,
    title: 'The Midnight Slim',
    fit: 'Slim fit',
    price: '$68',
    defaultImg: '/assets/product-black-slim.jpg',
    hoverImg: '/assets/jeans-lifestyle-3.jpg'
  },
  {
    id: 3,
    title: 'The Faded Story',
    fit: 'Relaxed fit',
    price: '$58',
    defaultImg: '/assets/product-light-wash.jpg',
    hoverImg: '/assets/jeans-lifestyle-1.jpg'
  },
  {
    id: 4,
    title: 'The Deep Indigo',
    fit: 'Straight fit',
    price: '$72',
    defaultImg: '/assets/product-indigo.jpg',
    hoverImg: '/assets/jeans-lifestyle-4.jpg'
  }
];

const Shop = () => {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop-page-wrapper">
      <div className="container">
        
        {/* Header Section: Title & Button */}
        <div className="shop-header">
          <div className="shop-header-text">
            <span className="collection-subtitle">COLLECTION</span>
            <h1 className="collection-title">The Essentials.</h1>
          </div>
          <div className="shop-header-action">
            <button className="cta-btn shop-btn">
              ORDER A FREE SAMPLE <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="row product-grid">
          {products.map((product) => (
            <div className="col-md-6 product-card-col" key={product.id}>
              <div className="product-card">
                
                {/* Image Wrapper with Hover Effect */}
                <div className="product-img-wrapper">
                  {/* Bottom Image (Lifestyle - Hover) */}
                  <img 
                    src={product.hoverImg} 
                    alt={`${product.title} lifestyle`} 
                    className="img-hover" 
                  />
                  {/* Top Image (Product - Default) */}
                  <img 
                    src={product.defaultImg} 
                    alt={product.title} 
                    className="img-default" 
                  />
                </div>

                {/* Product Details */}
                <div className="product-details">
                  <div className="product-title-row">
                    <h3 className="product-title">{product.title}</h3>
                    <span className="product-price">{product.price}</span>
                  </div>
                  <span className="product-fit">{product.fit}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;