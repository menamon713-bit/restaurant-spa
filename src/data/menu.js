// ═══════════════════════════════════════
//  بيانات المنيو
// ═══════════════════════════════════════

export const categories = [
  { id: 'all', name: 'الكل', emoji: '🍽️' },
  { id: 'offers', name: 'عروض', emoji: '🔥' },
  { id: 'grill', name: 'مشويات', emoji: '🍖' },
  { id: 'mahmar', name: 'محمر', emoji: '🍗' },
  { id: 'tagen', name: 'طواجن', emoji: '🍲' },
  { id: 'home', name: 'أكل بيتي', emoji: '🏠' },
  { id: 'side', name: 'مقبلات', emoji: '🥗' },
];

export const products = [
  // مشويات
  { id: 1, name: 'كباب مشوي', category: 'grill', price: 220, emoji: '🍖', description: 'كباب بلدي مشوي على الفحم، مع أرز بسمتي وسلطة' },
  { id: 2, name: 'كفتة مشوية', category: 'grill', price: 198, oldPrice: 240, emoji: '🍖', description: 'كفتة لحم مفروم مشوية، مع أرز بسمتي وسلطة' },
  { id: 3, name: 'شيش طاووق', category: 'grill', price: 180, emoji: '🍗', description: 'شيش طاووق متبل ومشوي، مع أرز وسلطة' },
  { id: 4, name: 'ريش ضاني', category: 'grill', price: 320, emoji: '🥩', description: 'ريش ضاني طازجة مشوية على الفحم' },
  { id: 5, name: 'فراخ مشوية', category: 'grill', price: 160, emoji: '🍗', description: 'نصف فرخة مشوية على الفحم مع أرز' },

  // محمر
  { id: 6, name: 'لحمة محمرة', category: 'mahmar', price: 250, emoji: '🥘', description: 'لحمة محمرة بطعم أصيل مع أرز' },
  { id: 7, name: 'فراخ محمرة', category: 'mahmar', price: 140, emoji: '🍗', description: 'فراخ محمرة بالبهارات مع أرز' },
  { id: 8, name: 'حمام محشي', category: 'mahmar', price: 280, emoji: '🕊️', description: 'حمام محشي ومحمر مع أرز' },
  { id: 9, name: 'سجق بلدي', category: 'mahmar', price: 150, emoji: '🌭', description: 'سجق بلدي محمر بالطماطم' },

  // طواجن
  { id: 10, name: 'طاجن بامية', category: 'tagen', price: 170, emoji: '🍲', description: 'طاجن بامية باللحمة في الفرن' },
  { id: 11, name: 'طاجن بطاطس', category: 'tagen', price: 160, emoji: '🍲', description: 'طاجن بطاطس باللحمة في الفرن' },
  { id: 12, name: 'طاجن فاصوليا', category: 'tagen', price: 155, emoji: '🍲', description: 'طاجن فاصوليا بيضا باللحمة' },
  { id: 13, name: 'طاجن عكاوي', category: 'tagen', price: 210, emoji: '🍲', description: 'طاجن عكاوي بالبصل في الفرن' },

  // أكل بيتي
  { id: 14, name: 'فتة باللحمة', category: 'home', price: 190, emoji: '🍛', description: 'فتة باللحمة والخل والتوم' },
  { id: 15, name: 'محشي مشكل', category: 'home', price: 130, emoji: '🍃', description: 'محشي كرنب وورق عنب وكوسة' },
  { id: 16, name: 'كشري', category: 'home', price: 80, emoji: '🍚', description: 'كشري مصري أصيل' },
  { id: 17, name: 'رقاق باللحمة', category: 'home', price: 200, emoji: '🍰', description: 'رقاق باللحمة المفرومة' },

  // مقبلات
  { id: 18, name: 'سلطة بلدي', category: 'side', price: 30, emoji: '🥗', description: 'سلطة خضراء طازجة' },
  { id: 19, name: 'طحينة', category: 'side', price: 25, emoji: '🥣', description: 'طحينة بالليمون' },
  { id: 20, name: 'بابا غنوج', category: 'side', price: 35, emoji: '🍆', description: 'بابا غنوج بالطحينة' },
  { id: 21, name: 'مخلل مشكل', category: 'side', price: 20, emoji: '🥒', description: 'مخلل بلدي مشكل' },

  // عروض
  { id: 22, name: 'طبق عويضة المميز', category: 'offers', price: 98, oldPrice: 139, emoji: '🍖', description: 'تشكيلة مشويات كاملة', isOffer: true },
  { id: 23, name: 'وجبة عائلية', category: 'offers', price: 280, oldPrice: 375, emoji: '🍗', description: 'فرخة كاملة + أرز + سلطة', isOffer: true },
  { id: 24, name: 'طاجن مميز', category: 'offers', price: 160, oldPrice: 200, emoji: '🍲', description: 'طاجن لحمة بالبصل', isOffer: true },
];

export const restaurantInfo = {
  name: 'مطعم عويضة الجمهورية',
  phone: '01000736268',
  whatsapp: '201141106406',
  address: '25 الجمهورية، برج مبارك، سوهاج',
  hours: 'من 11 ص حتى 1 ص',
};
