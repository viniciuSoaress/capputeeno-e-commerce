
import Link from "next/link"
import { Header, Product } from "./components"
import { allProducts } from './utils'


async function getData() {
  return allProducts
}



export default async function Home() {

  const products = await getData()
  return (
    <>
      <Header />

      <main
        className="flex min-h-screen flex-wrap items-center gap-8 px-20 py-36 bg-[#f0f0f5]"
      >

        {products.map((product) => (
          <Link href={`/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>

        ))}
      </main>
    </>
  )
}
