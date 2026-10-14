import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/menu';

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>📞 تواصل معانا</h1>
        <p>إحنا في خدمتك دايماً</p>
      </div>

      <div className="contact-grid">
        <a href={`tel:${restaurantInfo.phone}`} className="contact-card primary">
          <Phone size={32} className="contact-icon" />
          <h3>اتصل بينا</h3>
          <p className="contact-phone">{restaurantInfo.phone}</p>
          <span className="contact-badge">اطلب دلوقتي</span>
        </a>

        <div className="contact-card">
          <MapPin size={32} className="contact-icon" />
          <h3>العنوان</h3>
          <p>{restaurantInfo.address}</p>
        </div>

        <div className="contact-card">
          <Clock size={32} className="contact-icon" />
          <h3>المواعيد</h3>
          <p>{restaurantInfo.hours}</p>
        </div>
      </div>

      {/* قسم الطلب */}
      <div className="contact-cta">
        <h2>🍖 جاهز تطلب؟</h2>
        <p>اتصل بينا دلوقتي وهنوصلك في أسرع وقت</p>
        <a href={`tel:${restaurantInfo.phone}`} className="big-call-button">
          <Phone size={24} />
          <span>{restaurantInfo.phone}</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
