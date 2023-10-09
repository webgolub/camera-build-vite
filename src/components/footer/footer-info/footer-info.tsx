import { Link } from 'react-router-dom';
import { LogoType } from '../../../const';
import Logo from '../../header/logo/logo';

function FooterInfo(): JSX.Element {

  return(
    <div className="footer__info">
      <Logo type={LogoType.Footer} />
      <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
      <ul className="social">
        <li className="social__item">
          <Link className="link" to="#" aria-label="Переход на страницу вконтатке">
            <svg width="20" height="20" aria-hidden="true">
              <use xlinkHref="#icon-vk"></use>
            </svg>
          </Link>
        </li>
        <li className="social__item">
          <Link className="link" to="#" aria-label="Переход на страницу pinterest">
            <svg width="20" height="20" aria-hidden="true">
              <use xlinkHref="#icon-pinterest"></use>
            </svg>
          </Link>
        </li>
        <li className="social__item">
          <Link className="link" to="#" aria-label="Переход на страницу reddit">
            <svg width="20" height="20" aria-hidden="true">
              <use xlinkHref="#icon-reddit"></use>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterInfo;
