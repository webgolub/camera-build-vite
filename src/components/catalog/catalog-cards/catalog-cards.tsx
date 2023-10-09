import { useAppSelector } from '../../../hooks/use-app-selector/use-app-selector';
import CatalogCard from '../catalog-card/catalog-card';

function CatalogCards(): JSX.Element {
  const products = useAppSelector((state) => state.allProducts);

  return(
    <div className="cards catalog__cards">
      {products.map((product) => <CatalogCard product={product} key={product.id}/>)}
    </div>
  );
}

export default CatalogCards;
