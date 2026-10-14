import { MapPin, Clock, Award, Users } from 'lucide-react';
import { restaurantInfo } from '../data/menu';

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>🍖 عن المطعم</h1>
        <p>قصة طعم مش عادي</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>من إحنا؟</h2>
          <p>
            مطعم {restaurantInfo.name} هو واحد من أشهر المطاعم في سوهاج، 
            بنقدم أكل بيتي أصيل ومشويات على الفحم بطعم مش عادي.
            بدأنا رحلتنا بحلم بسيط: نقدم أكل طيب بأسعار مناسبة لكل الناس.
          </p>
        </section>

        <div className="about-features">
          <div className="about-feature">
            <Award size={40} className="about-icon" />
            <h3>جودة عالية</h3>
            <p>أحسن المكونات الطازجة</p>
          </div>

          <div className="about-feature">
            <Users size={40} className="about-icon" />
            <h3>خدمة ممتازة</h3>
            <p>نهتم بكل عميل</p>
          </div>

          <div className="about-feature">
            <Clock size={40} className="about-icon" />
            <h3>توصيل سريع</h3>
            <p>طلبك يوصل في أسرع وقت</p>
          </div>

          <div className="about-feature">
            <MapPin size={40} className="about-icon" />
            <h3>موقع مميز</h3>
            <p>{restaurantInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
