import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Phone } from 'lucide-react';
import { products, restaurantInfo } from '../data/menu';

function CartPage({ cart, onUpdateQty, onRemove, onClear }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  // نجيب تفاصيل كل صنف
  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // تحديث الفورم
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // التحقق من البيانات
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الموبايل مطلوب';
    if (!formData.address.trim()) newErrors.address = 'العنوان مطلوب';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // إرسال الطلب (اتصال تليفوني)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // نجهز ملخص الطلب في الـ Clipboard
    const lines = cartItems.map(item =>
      `• ${item.name} × ${item.quantity} = ${item.price * item.quantity} ج`
    ).join('\n');

    const orderSummary =
      `طلب جديد\n\n` +
      `الاسم: ${formData.name}\n` +
      `الموبايل: ${formData.phone}\n` +
      `العنوان: ${formData.address}\n` +
      (formData.notes ? `ملاحظات: ${formData.notes}\n` : '') +
      `\nتفاصيل الطلب:\n${lines}\n\n` +
      `الإجمالي: ${total} ج`;

    // ننسخ ملخص الطلب للـ Clipboard (لو الجهاز يدعم)
    if (navigator.clipboard) {
      navigator.clipboard.writeText(orderSummary).catch(() => {});
    }

    // نطلب من المستخدم يتصل
    setTimeout(() => {
      const confirmCall = confirm(
        `📞 اضغط OK عشان تتصل بالمطعم\n\n` +
        `📋 ملخص طلبك اتحفظ في الـ Clipboard\n` +
        `(الصقه في أي مكان عشان تتأكد)\n\n` +
        `💰 الإجمالي: ${total} ج`
      );

      if (confirmCall) {
        // الاتصال بالتليفون
        window.location.href = `tel:${restaurantInfo.phone}`;
      }
    }, 500);
  };

  // لو السلة فاضية
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-state">
          <ShoppingBag size={64} className="empty-icon-large" />
          <h3>السلة فاضية</h3>
          <p>ضيف منتجات عشان تكمل الطلب</p>
          <Link to="/menu" className="btn btn-primary">
            شوف المنيو
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <h1>🛒 سلة التسوق</h1>
        <p>{totalItems} منتج</p>
      </div>

      <div className="cart-layout">
        {/* العمود الشمال: الأصناف */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">{item.emoji}</div>

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price} ج</p>
              </div>

              <div className="cart-item-controls">
                <button
                  className="qty-button"
                  onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                >
                  <Plus size={16} />
                </button>
                <span className="qty-display">{item.quantity}</span>
                <button
                  className="qty-button"
                  onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                >
                  <Minus size={16} />
                </button>
              </div>

              <div className="cart-item-total">
                {item.price * item.quantity} ج
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(item.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}

          <button className="clear-cart-button" onClick={onClear}>
            <Trash2 size={16} />
            تفريغ السلة
          </button>
        </div>

        {/* العمود اليمين: الفورم */}
        <div className="checkout-section">
          <h2>📝 بيانات الطلب</h2>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label>الاسم *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="اكتب اسمك"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>رقم الموبايل *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="01xxxxxxxxx"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label>العنوان *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="العنوان بالتفصيل"
                className={errors.address ? 'error' : ''}
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label>ملاحظات (اختياري)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="أي ملاحظات على الطلب"
                rows="3"
              ></textarea>
            </div>

            {/* الإجمالي */}
            <div className="checkout-total">
              <span>الإجمالي:</span>
              <span className="checkout-total-amount">{total} ج</span>
            </div>

            <button type="submit" className="submit-button call-button">
              <Phone size={20} />
              اطلب دلوقتي (اتصل بينا)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
