import { useState, useEffect } from "react"
import { Product } from "../models/product"

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
      <h1 className="text-red-500 font-serif">Digital store</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}-- ${product.price}
            </li>
          )
        })}
      </ul>
      <button
        className="bg-blue-300 rounded-sm m-2 p-1"
        onClick={handleAddProduct}>
        Add_Product
      </button>
    </>
  )
}

export default App
