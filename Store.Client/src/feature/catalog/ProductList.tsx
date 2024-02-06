import { Product } from "../../app/models/product"
import ProductCard from "./ProductCard"

interface Props {
  products: Product[]
}

export default function ProductList(props: Props) {
  const { products } = props
  return (
    <section className="product-list-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </section>
  )
}
