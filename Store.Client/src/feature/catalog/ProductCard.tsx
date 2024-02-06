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
      <span className="relative ">
        <h1 className="absolute left-2 text-4xl text-gray-600 bg-gray-200 rounded-full p-0.5 m-1">
          {product.description.charAt(0).toUpperCase()}
        </h1>
        <img
          src={product.pictureUrl}
          alt="image"
          className="mb-2 ml-5 w-[80%]  h-48  rounded-md"
        />
      </span>

      {readMore ? (
        <p className="m-2 font-roboto">
          {product.description}
          <span
            className="text-blue-500 hover:text-blue-600 duration-300 ml-1"
            onClick={handleReadmore}>
            ...Read Less
          </span>
        </p>
      ) : (
        <p className="m-2 font-roboto">
          {product.description.substring(0, para_Length)}
          <span
            className="text-blue-500 hover:text-blue-600 duration-300 ml-1"
            onClick={handleReadmore}>
            ...Read More
          </span>
        </p>
      )}
      <section className="m-2 flex justify-between">
        <h1 className="font-roboto font-semibold">{product.name}</h1>
        <h1 className="font-roboto font-semibold text-gray-700">
          {product.price}
        </h1>
      </section>
    </section>
  )
}
