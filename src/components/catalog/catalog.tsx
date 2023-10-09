import CatalogAside from './catalog-aside/catalog-aside';
import CatalogCards from './catalog-cards/catalog-cards';
import CatalogPagination from './catalog-pagination/catalog-pagination';
import CatalogSort from './catalog-sort/catalog-sort';

function Catalog(): JSX.Element {

  return(
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogAside />
          <div className="catalog__content">
            <CatalogSort />
            <CatalogCards />
            <CatalogPagination />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
