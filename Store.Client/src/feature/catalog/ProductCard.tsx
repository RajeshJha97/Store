import { useState } from "react"
import { Product } from "../../app/models/product"

interface Props {
  product: Product
}
export default function ProductCard(props: Props) {
  const [readMore, SetReadMore] = useState(false)
  let para_Length = 60
  const handleReadmore = () => {
    SetReadMore(!readMore)
  }
  const { product } = props
  return (
    <section className="product-card-container">
      {/* Header section */}
      <section className="flex w-full justify-between pl-4 pr-4 mt-2 mb-2">
        <h1 className="bg-gray-300 rounded-full h-6 w-6 text-center">
          {product.description.charAt(0).toUpperCase()}
        </h1>
        <h2 className="text-purple-700 font-roboto text-lg ">{product.name}</h2>
      </section>
      {/* image section */}
      <img
        src={product.pictureUrl}
        alt={product.name}
        className="h-48 w-48 mb-1"
      />
      {/* Price- tag section */}
      <section className="flex flex-col w-full  pl-4 pr-4 mb-1">
        <h1 className="text-purple-600 text-lg">₹{product.price}</h1>
        <h1 className="text-gray-500">
          {product.brand} / {product.type}
        </h1>
      </section>
      {/* Button Section */}
      <section className="flex w-full justify-around mb-2 text-blue-500 mt-2">
        <a
          href="#"
          className="hover:text-blue-700 transition-all ease-in duration-300">
          ADD TO CART
        </a>
        <a
          href="#"
          className="hover:text-blue-700 transition-all ease-in duration-300">
          VIEW
        </a>
      </section>
    </section>
  )
}
