import { Product } from "../../app/models/product"
import ProductList from "./ProductList"

interface Props {
  products: Product[]
  handleAddProduct: () => void
}

export default function Catalog(props: Props) {
  const { products, handleAddProduct } = props
  return (
    <section className="flex flex-col justify-center items-center">
      <ProductList products={products} />
      {/* Primary Button */}
      <a
        className="bg-gray-800 text-white px-5 py-2.5 rounded-lg relative group overflow-hidden m-2 cursor-pointer "
        onClick={handleAddProduct}>
        <span className="absolute left-0 top-0 h-full w-0 rounded-lg bg-blue-800 group-hover:w-full group-hover:h-full transition-all ease-in duration-300"></span>
        <span className="relative">Add Product</span>
      </a>
    </section>
  )
}
