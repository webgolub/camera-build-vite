import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './banner.css';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { fetchAllPromoAction } from '../../store/api-action';

function Banner(): JSX.Element | null {
  const allPromos = useAppSelector((store) => store.allPromos);
  const isPromoExist = allPromos.length > 0;

  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted && !isPromoExist) {
      dispatch(fetchAllPromoAction());
    }

    return () => {
      isMounted = false;
    };
  },[isPromoExist, dispatch]);

  if (!isPromoExist) {
    return null;
  }

  return(
    <div className="banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{clickable: true}}
        loop
        touchRatio={0}
        autoplay={{delay: 3000}}
      >
        {
          allPromos.map((promo) => (
            <SwiperSlide key={promo.id}>
              <picture>
                <source type="image/webp" srcSet={`${promo.previewImgWebp}, ${promo.previewImgWebp2x} 2x`} />
                <img src={promo.previewImg} srcSet={`${promo.previewImg2x} 2x`} width="1280" height="280" alt="баннер" />
              </picture>
              <p className="banner__info"><span className="banner__message">Новинка!</span>
                <span className="title title--h1">{promo.name}</span>
                <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
                <Link className="btn" to={`${AppRoute.Catalog}/${promo.id}`}>Подробнее</Link>
              </p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );

}

export default Banner;
