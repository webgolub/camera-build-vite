import { RATING_MAX_STARS } from '../../../../const';

type CardRatingProps = {
  rating: number;
  reviewCount: number;
}

function CardRating({rating, reviewCount}: CardRatingProps):JSX.Element {
  const maxStars = RATING_MAX_STARS;

  const handleIcon = (index: number) => (index <= rating)
    ? (
      <svg width="17" height="16" aria-hidden="true" key={index}>
        <use xlinkHref="#icon-full-star"></use>
      </svg>
    )
    : (
      <svg width="17" height="16" aria-hidden="true" key={index}>
        <use xlinkHref="#icon-star"></use>
      </svg>
    );

  return(
    <div className="rate product-card__rate">
      { Array.from({length: maxStars}).map((_, index) => handleIcon(index + 1)) }
      <p className="visually-hidden">{`Рейтинг: ${rating}`}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
}

export default CardRating;
