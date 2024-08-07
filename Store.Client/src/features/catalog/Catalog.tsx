import { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

// interface Props {
//   products: Product[];
//   handleAddProduct: () => void; //that is accepting 0 parameter and returning void
// }

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const url = 'https://localhost:5000/api/Product';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        name: 'Product' + (prevState.length + 1),
        price: prevState.length * 100 + 100.25,
        description: 'Some Product',
        brand: 'Some brand',
        type: 'Some type',
        pictureUrl: 'http://picsum.photos/200',
      },
    ]);
  };
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
