import { Product } from "../../app/models/product"

interface Props {
  product: Product
}

export default function ProductCard(props: Props) {
  const { product } = props
  return (
    <li key={product.id}>
      <section className="catalog-product-container">
        <img src={product.pictureUrl} alt={product.name} className="img-icon" />
        <h1 className="text-lg font-mono">
          {product.name} - {product.price}
        </h1>
      </section>
    </li>
  )
}
