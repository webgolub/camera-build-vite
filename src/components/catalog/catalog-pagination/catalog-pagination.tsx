import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { PAGINATION_MAX_PAGES_RENDERED } from '../../../const';
import { useState } from 'react';

type CatalogPaginationProps = {
  buttonsCount: number;
  activeButton: number;
}

function CatalogPagination({buttonsCount, activeButton}: CatalogPaginationProps): JSX.Element {
  const navigate = useNavigate();
  const allButtons = Array.from({length: buttonsCount}, (_, index) => ({ id: crypto.randomUUID(), buttonNumber: index + 1}));
  const [startButtonToRender, setStartButtonToRender] = useState(0);
  const [finishButtonToRender, setFinishButtonToRender] = useState(PAGINATION_MAX_PAGES_RENDERED);
  const isNotAllPagesRendered = finishButtonToRender < allButtons.length;
  const forwardButtonClickHandler = () => {
    setStartButtonToRender(finishButtonToRender);
    setFinishButtonToRender((prevState) => prevState + PAGINATION_MAX_PAGES_RENDERED);
    navigate(`/catalog?page=${allButtons[finishButtonToRender].buttonNumber}`);
  };
  const backButtonClickHandler = () => {
    setStartButtonToRender((prevState) => prevState - PAGINATION_MAX_PAGES_RENDERED);
    setFinishButtonToRender(startButtonToRender);
    navigate(`/catalog?page=${(allButtons[startButtonToRender].buttonNumber) - 1}`);
  };

  return(
    <div className="pagination">
      <ul className="pagination__list">
        {
          startButtonToRender > 0 &&
          (
            <li className="pagination__item">
              <button className=" btn pagination__link pagination__link--text" onClick={backButtonClickHandler}>Назад
              </button>
            </li>
          )
        }{
          allButtons.slice(startButtonToRender, finishButtonToRender).map((button) => (

            <li className="pagination__item" key={button.id}>
              <Link
                className={classNames({
                  'pagination__link': true,
                  'pagination__link--active': button.buttonNumber === activeButton
                })}
                to={button.buttonNumber === 1
                  ? '/catalog'
                  : `/catalog?page=${button.buttonNumber}`}
              >
                {button.buttonNumber}
              </Link>
            </li>
          ))
        }{
          (isNotAllPagesRendered) &&
          <li className="pagination__item">
            <button className=" btn pagination__link pagination__link--text" onClick={forwardButtonClickHandler}>Далее</button>
          </li>
        }
      </ul>
    </div>
  );
}

export default CatalogPagination;
