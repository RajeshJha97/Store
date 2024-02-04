import { Product } from "../../app/models/product"
import ProductList from "./ProductList"

interface Props {
  products: Product[]
  handleAddProduct: () => void
}

export default function Catalog(props: Props) {
  const { products, handleAddProduct } = props
  return (
    <>
      <ProductList products={products} />
      <a
        className="bg-blue-500 text-white px-5 py-2.5 rounded-lg relative group overflow-hidden m-2 cursor-pointer"
        onClick={handleAddProduct}>
        <span className="absolute left-0 top-0 h-full w-0 rounded-lg bg-blue-600 group-hover:w-full group-hover:h-full transition-all ease-in duration-300"></span>
        <span className="relative">Add Product</span>
      </a>
    </>
  )
}
