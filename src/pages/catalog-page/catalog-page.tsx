import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { fetchAllProductsAction, fetchAllPromoAction } from '../../store/api-action';
import LoadingPage from '../loading-page/loading-page';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Catalog from '../../components/catalog/catalog';

function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAllProductsDataLoading = useAppSelector((store) => store.AllProductsDataLoadingStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchAllPromoAction());
      dispatch(fetchAllProductsAction());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  if (isAllProductsDataLoading) {
    return <LoadingPage />;
  }

  return (
    <main>
      <Helmet><title>Каталог - Фотошоп</title></Helmet>
      <Banner />
      <div className="page-content">
        <Breadcrumbs />
        <Catalog />
      </div>
    </main>
  );
}

export default CatalogPage;
