export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  Product = '/catalog/:id'
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Reviews = '/reviews',
  Coupons = '/coupons',
  Orders = '/orders'
}

export enum LogoType {
  Header = 'header',
  Footer = 'footer'
}

export enum ProductType {
  Collectible = 'Коллекционная',
  Instant = 'Моментальная',
  Digital = 'Цифровая',
  Film = 'Плёночная'
}

export enum ProductCategory {
  Camcorder = 'Видеокамера',
  Camera = 'Фотоаппарат'
}

export enum ProductLevel {
  Zero = 'Нулевой',
  Amateur = 'Любительский',
  Professional = 'Профессиональный'
}

export const RATING_MAX_STARS = 5;
