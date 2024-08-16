import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../app/models/product';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>();
  useEffect(() => {
    axios
      .get(`https://localhost:5000/api/Product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(product);
  if (loading) return <h3>Loading...</h3>;
  if (!product) return <h3>Product Not Found....</h3>;
  return (
    <main className=' bg-gray-100 w-full h-[100vh] flex justify-center items-center'>
      <section className='grid grid-cols-2 bg-white  w-[70vw] h-[70vh] rounded-xl p-4'>
        <section className='flex gap-4 justify-center items-center'>
          <section>
            <img
              src={product.pictureUrl}
              alt={product.name}
              className='h-[50vh]'
            />
            <section className='flex gap-4 justify-center items-center'>
              <button className='bg-yellow-400 pl-4 pr-4 pt-3 pb-3 rounded-lg hover:bg-yellow-500 duration-300'>
                Buy Now
              </button>
              <button className='bg-orange-400 pl-4 pr-4 pt-3 pb-3 rounded-lg hover:bg-orange-500 duration-300'>
                Add To Cart
              </button>
            </section>
          </section>
        </section>
        <section>
          {/* Name */}
          <section className='text-bold font-poppins'>
            <h3>{product.name.toUpperCase()}</h3>
            <h2 className='text-purple-700 mt-2'>${product.price}</h2>
          </section>
          <hr className='h-[1.5px] mt-1 mb-4 bg-gray-700  border rounded' />
          {/* Details */}
          <section>
            <table className=''>
              <tbody>
                <tr className='table-tr'>
                  <td>Name</td>
                  <td>{product.name.toUpperCase()}</td>
                </tr>
                <hr className='mt-4' />
                <tr className='table-tr'>
                  <td className='mr-40'>Description</td>
                  <td>{product.description}</td>
                </tr>
                <hr className='mt-4' />
                <tr className='table-tr'>
                  <td className='mr-40'>Type</td>
                  <td>{product.name.toUpperCase()}</td>
                </tr>
                <hr className='mt-4' />
                <tr className='table-tr'>
                  <td className='mr-40'>Brand</td>
                  <td>{product.brand}</td>
                </tr>
                <hr className='mt-4' />
                <tr className='table-tr'>
                  <td className='mr-40'>Quantity In Stock</td>
                  <td>{product.quantityInStock}</td>
                </tr>
                <hr className='mt-4' />
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </main>
  );
}
