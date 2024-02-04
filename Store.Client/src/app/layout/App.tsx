import { useState, useEffect } from "react"
import { Product } from "../models/product"
import Catalog from "../../feature/catalog/Catalog"

function App() {
  const url = "https://localhost:5000/api/Product"

  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
  }, [])

  const handleAddProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        name: `Product-${prevState.length + 1}`,
        description: "Lorem ipsum dolor sit amet.",
        price: prevState.length * 56 + 100.25,
        brand: "random brand",
        pictureUrl: "http://picsum/.photos/200",
        quantityInStock: 5,
      },
    ])
  }
  return (
    <>
      <h1 className="font-semibold text-4xl font-serif ">Digital store</h1>
      <Catalog products={products} handleAddProduct={handleAddProduct} />
    </>
  )
}

export default App
