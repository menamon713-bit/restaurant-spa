import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/menu';

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'الرئيسية' },
    { path: '/menu', label: 'المنيو' },
    { path: '/about', label: 'عن المطعم' },
    { path: '/contact', label: 'تواصل' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* الشعار */}
        <Link to="/" className="navbar-logo">
          🍖 عويضة الجمهورية
        </Link>

        {/* اللينكات */}
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* السلة + الاتصال + القائمة */}
        <div className="navbar-actions">
          <a href={`tel:${restaurantInfo.phone}`} className="call-button-nav" title="اتصل بينا">
            <Phone size={20} />
          </a>

          <Link to="/cart" className="cart-button">
            <ShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
