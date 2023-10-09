import { LogoType } from '../../const';
import BasketButton from './basket-button/basket-button';
import Logo from './logo/logo';
import NavMain from './nav-main/nav-main';
import SearchForm from './search-form/search-form';

function Header(): JSX.Element {

  return(
    <header className="header" id="header">
      <div className="container">
        <Logo type={LogoType.Header} />
        <NavMain />
        <SearchForm />
        <BasketButton />
      </div>
    </header>
  );
}

export default Header;
