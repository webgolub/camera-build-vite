import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../const';

function NavMain(): JSX.Element {

  return(
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink className="main-nav__link" to={AppRoute.Catalog}>Каталог
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__link" to="#">Гарантии
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__link" to="#">Доставка
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__link" to="#">О компании
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMain;
