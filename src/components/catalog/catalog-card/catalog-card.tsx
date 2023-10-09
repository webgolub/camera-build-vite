import { Link } from 'react-router-dom';
import { Product } from '../../../types/product';
import CardRating from './cart-rating/card-rating';

type CatalogCardProps = {
  product: Product;
}

function CatalogCard(
  { product: {
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    category,
    name,
    rating,
    reviewCount,
    price,
  }}: CatalogCardProps): JSX.Element {

  return(
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="280" height="240" alt={`${category} ${name}`} />
        </picture>
      </div>
      <div className="product-card__info">
        <CardRating rating={rating} reviewCount={reviewCount} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${price} ₽`}</p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить</button>
        <Link className="btn btn--transparent" to="#">Подробнее</Link>
      </div>
    </div>
  );
}

export default CatalogCard;
