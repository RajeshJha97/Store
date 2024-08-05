import { Product } from '../../app/models/product';

interface Props {
  product: Product;
}
export default function ProductCard(props: Props) {
  const { product } = props;
  return (
    <main className='max-w-[340px] border border-blue-400 mb-4 rounded-md shadow-md bg-slate-50 overflow-hidden hover:scale-105 duration-300 hover:bg-slate-100 hover:cursor-pointer'>
      {/* meta data */}
      <section className='flex justify-between ml-2 mr-2 mt-1'>
        <div className='bg-blue-400 h-5 w-5 rounded-full flex items-center justify-center text-white'>
          <h2>{product.name.substring(0, 1).toUpperCase()}</h2>
        </div>
        <h4 className='font-poppins'>{product.brand}</h4>
      </section>
      {/* product image */}
      <section className='ml-2 mr-2'>
        <img
          src={product.pictureUrl}
          alt={product.name}
          className='w-full h-[20vh]'
        />
      </section>
      {/* details*/}
      <section className='flex flex-col gap-2'>
        {/* title ,Priceing */}
        <section className='flex justify-between ml-2 mr-2'>
          <h2 className='font-roboto'>
            {product.brand}/{product.type}
          </h2>
          <h3 className='text-purple-700'>
            $<span className='font-roboto font-bold'>{product.price}</span>
          </h3>
        </section>
        {/* buttons */}
        <section className='ml-2 mr-2 mb-2 flex justify-between'>
          <a href='' className='text-blue-500 hover:text-blue-700 duration-300'>
            Add To Cart
          </a>
          <a href='' className='text-blue-500 hover:text-blue-700 duration-300'>
            View
          </a>
        </section>
      </section>
    </main>
  );
}
