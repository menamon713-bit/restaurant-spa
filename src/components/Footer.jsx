import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/menu';

function Footer() {
  const whatsappLink = `https://wa.me/${restaurantInfo.whatsapp}`;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* العمود الأول: عن المطعم */}
        <div className="footer-column">
          <h3 className="footer-logo">🍖 {restaurantInfo.name}</h3>
          <p className="footer-text">
            طعم مش عادي في قلب سوهاج. برجر، بيتزا، سكانر، كريب، ومشروبات. 
            كل حاجة بتحبها في مكان واحد.
          </p>
        </div>

        {/* العمود التاني: معلومات التواصل */}
        <div className="footer-column">
          <h4 className="footer-title">تواصل معانا</h4>
          
          <div className="footer-item">
            <MapPin size={18} />
            <span>{restaurantInfo.address}</span>
          </div>

          <div className="footer-item">
            <Phone size={18} />
            <a href={`tel:${restaurantInfo.phone}`} className="footer-link">
              {restaurantInfo.phone}
            </a>
          </div>

          <div className="footer-item">
            <MessageCircle size={18} />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-link">
              واتساب
            </a>
          </div>

          <div className="footer-item">
            <Clock size={18} />
            <span>{restaurantInfo.hours}</span>
          </div>
        </div>

        {/* العمود التالت: لينكات سريعة */}
        <div className="footer-column">
          <h4 className="footer-title">لينكات سريعة</h4>
          <ul className="footer-links">
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/menu">المنيو</a></li>
            <li><a href="/about">عن المطعم</a></li>
            <li><a href="/contact">تواصل</a></li>
          </ul>
        </div>
      </div>

      {/* الفوتر السفلي */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {restaurantInfo.name} - جميع الحقوق محفوظة</p>
        <p className="footer-credit">
          صُنع بـ ❤️ بواسطة <a href="#" className="footer-credit-link">Mina Developer</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
