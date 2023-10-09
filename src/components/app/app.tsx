import { Navigate, Route, Routes } from 'react-router-dom';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route path={AppRoute.Root} element={<Navigate to={AppRoute.Catalog} />} />
          <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        </Route>
        <Route path='*' element={<div><h1>404 not found</h1></div>}></Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
