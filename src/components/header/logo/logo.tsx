import { Link, useLocation } from 'react-router-dom';
import { AppRoute, LogoType } from '../../../const';

type LogoProps = {
  type: LogoType;
}

function Logo({type}: LogoProps): JSX.Element {
  const currentLocation = useLocation().pathname;
  const isCatalog = currentLocation === AppRoute.Catalog;
  const iconLogo = (type === LogoType.Header)
    ? '#icon-logo'
    : '#icon-logo-mono';
  const logo = (
    <svg width="100" height="36" aria-hidden="true">
      <use xlinkHref={iconLogo}></use>
    </svg>
  );

  return(isCatalog ? logo :
    <Link to={'/'} className='header__logo' aria-label='Переход на главную'>
      {logo}
    </Link>
  );
}

export default Logo;
