import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Flame, Clock, MapPin } from 'lucide-react';
import { products } from '../data/menu';
import ProductCard from '../components/ProductCard';

function Home({ onAdd, cart }) {
  // نعرض 6 أصناف بس في الرئيسية
  const featuredProducts = products.slice(0, 6);
  const offers = products.filter(p => p.isOffer);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            ✨ أهلاً بيك في مطعم عويضة
          </div>

          <h1 className="hero-title">
            طعم <span className="hero-highlight">مش عادي</span>
            <br />
            في قلب سوهاج
          </h1>

          <p className="hero-description">
            برجر، بيتزا، سكانر، كريب، ومشروبات. كل حاجة بتحبها في مكان واحد.
            اطلب دلوقتي واستمتع بأحلى طعم.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              شوف المنيو
              <ArrowLeft size={18} />
            </Link>
            <Link to="/about" className="btn btn-outline">
              عن المطعم
            </Link>
          </div>
        </motion.div>
      </section>

      {/* مميزات */}
      <section className="features">
        <div className="feature-card">
          <Flame size={32} className="feature-icon" />
          <h3>طازة دايماً</h3>
          <p>أكل بيتي بطعم أصيل</p>
        </div>

        <div className="feature-card">
          <Clock size={32} className="feature-icon" />
          <h3>توصيل سريع</h3>
          <p>طلبك يوصل في أسرع وقت</p>
        </div>

        <div className="feature-card">
          <MapPin size={32} className="feature-icon" />
          <h3>موقع مميز</h3>
          <p>في قلب سوهاج</p>
        </div>
      </section>

      {/* العروض */}
      {offers.length > 0 && (
        <section className="section">
          <div className="section-header">
            <h2>🔥 عروض خاصة</h2>
            <Link to="/menu" className="section-link">
              شوف الكل
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="products-grid">
            {offers.map(offer => (
              <ProductCard
                key={offer.id}
                product={offer}
                onAdd={onAdd}
                inCart={isInCart(offer.id)}
              />
            ))}
          </div>
        </section>
      )}

      {/* أصناف مميزة */}
      <section className="section">
        <div className="section-header">
          <h2>🍽️ أصناف مميزة</h2>
          <Link to="/menu" className="section-link">
            شوف الكل
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              inCart={isInCart(product.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
