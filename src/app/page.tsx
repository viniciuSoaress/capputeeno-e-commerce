'use client'

import Link from "next/link"
import { Header, Product, ButtonContainer, Main, ShoppingCart } from "./components"
import { allProducts, searchProduct } from './utils'
import { useProduct,useCont } from "./hooks"






export default function Home() {

  const {is, handleIsClick, product, handleDelete} = useCont()

  const { name, handleNameChange, setName } = useProduct()


  let prod = searchProduct(allProducts, name)

  if (is) {
    return (
      <ShoppingCart product={product} onClick={handleIsClick} onDelete={handleDelete} />
    )
  }


  return (
    <Main>
      <Header onChange={handleNameChange} />

      <ButtonContainer state={setName} />

      <div
        className="flex min-h-screen max-w-[1440px] w-screen flex-wrap justify-center items-center gap-8 px-20 py-14 bg-[#f0f0f5] border-x"
      >

        {prod.map((product) => (
          <Link href={`/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>

        ))}

      </div>
    </Main>
  )
}
