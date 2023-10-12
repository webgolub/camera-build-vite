import classNames from 'classnames';
import { Link } from 'react-router-dom';

type CatalogPaginationProps = {
  pagesCount: number;
  activePage: number;
}

function CatalogPagination({pagesCount, activePage}: CatalogPaginationProps): JSX.Element {

  return(
    <div className="pagination">
      <ul className="pagination__list">
        {
          Array.from({length: pagesCount}, () => crypto.randomUUID()).map((value, index) => {
            const pageNumber = index + 1;

            return(

              <li className="pagination__item" key={value}>
                <Link
                  className={classNames({
                    'pagination__link': true,
                    'pagination__link--active': pageNumber === activePage
                  })}
                  to={pageNumber === 1
                    ? '/catalog'
                    : `/catalog?page=${pageNumber}`}
                >
                  {pageNumber}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default CatalogPagination;
