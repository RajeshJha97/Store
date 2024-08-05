import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

export default function ProductList(props: Props) {
  const { products } = props;
  return (
    <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4 mr-4'>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}
