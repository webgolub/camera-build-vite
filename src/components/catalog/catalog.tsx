import { useEffect, useState } from 'react';
import { PRODUCTS_PER_PAGE } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import CatalogAside from './catalog-aside/catalog-aside';
import CatalogCards from './catalog-cards/catalog-cards';
import CatalogPagination from './catalog-pagination/catalog-pagination';
import CatalogSort from './catalog-sort/catalog-sort';
import { useSearchParams } from 'react-router-dom';

function Catalog(): JSX.Element {
  const products = (useAppSelector((state) => state.allProducts));
  const productsCount = products.length;
  const [productsToRender, setProductsToRender] = useState(products.slice(0, PRODUCTS_PER_PAGE));
  const paginationPagesCount = Math.ceil(productsCount / PRODUCTS_PER_PAGE);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = +(searchParams.get('page') || 1);

  useEffect(() => {
    const startIndex = (PRODUCTS_PER_PAGE * (pageNumber - 1));
    setProductsToRender(products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE));
  }, [pageNumber, products, searchParams, setSearchParams]);

  return(
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogAside />
          <div className="catalog__content">
            <CatalogSort />
            {
              pageNumber > paginationPagesCount
                ? <h2>{`Страницы №${pageNumber} не существует. Выберите существующую страницу с товарами.`}</h2>
                : <CatalogCards products={productsToRender} />
            }
            {
              (productsCount > PRODUCTS_PER_PAGE) &&
              <CatalogPagination
                pagesCount={paginationPagesCount}
                activePage={pageNumber}
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
