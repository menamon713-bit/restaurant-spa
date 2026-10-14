import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/menu';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

function Menu({ onAdd, cart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // فلترة الأصناف
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // فلترة حسب القسم
    if (selectedCategory === 'offers') {
      filtered = filtered.filter(p => p.isOffer);
    } else if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // فلترة حسب البحث
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div className="menu-page">
      {/* العنوان */}
      <div className="page-header">
        <h1>🍽️ المنيو</h1>
        <p>اختر من أشهى الأصناف</p>
      </div>

      {/* البحث */}
      <div className="search-wrapper">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="ابحث عن صنف..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* الفلترة */}
      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* عدد النتائج */}
      <div className="results-count">
        <span>{filteredProducts.length} صنف</span>
      </div>

      {/* الأصناف */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              inCart={isInCart(product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon">😕</span>
          <h3>مفيش نتائج</h3>
          <p>جرب بحث تاني أو قسم مختلف</p>
        </div>
      )}
    </div>
  );
}

export default Menu;
