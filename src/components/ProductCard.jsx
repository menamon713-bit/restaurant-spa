import { Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';

function ProductCard({ product, onAdd, inCart }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-prices">
          <span className="product-price">{product.price} ج</span>
          {product.oldPrice && (
            <span className="product-old-price">{product.oldPrice} ج</span>
          )}
        </div>
      </div>

      <div className="product-image-wrapper">
        <div className="product-image">{product.emoji}</div>
        
        <button
          className={`add-button ${inCart ? 'added' : ''}`}
          onClick={() => onAdd(product)}
        >
          {inCart ? (
            <>
              <Check size={16} />
              <span>في السلة</span>
            </>
          ) : (
            <>
              <Plus size={16} />
              <span>أضف</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
