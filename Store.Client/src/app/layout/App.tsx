import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';

function App() {
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
      <Header />
      <Catalog products={products} handleAddProduct={handleAddProduct} />
    </>
  );
}

export default App;
