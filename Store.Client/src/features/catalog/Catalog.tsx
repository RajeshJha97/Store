import { Product } from '../../app/models/product';
import ProductList from './ProductList';

interface Props {
  products: Product[];
  handleAddProduct: () => void; //that is accepting 0 parameter and returning void
}

export default function Catalog(props: Props) {
  const { products, handleAddProduct } = props;
  return (
    <>
      <ProductList products={products} />
      <button
        onClick={handleAddProduct}
        className='mt-4 border border-blue-500 p-2 rounded-xl'
      >
        Add Product
      </button>
    </>
  );
}
