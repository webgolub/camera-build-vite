import { Products } from '../../../types/product';
import CatalogCard from '../catalog-card/catalog-card';

type CatalogCardsProps = {
  products: Products;
}

function CatalogCards({products}: CatalogCardsProps): JSX.Element {

  return(
    <div className="cards catalog__cards">
      {products.map((product) => <CatalogCard product={product} key={product.id}/>)}
    </div>
  );
}

export default CatalogCards;
