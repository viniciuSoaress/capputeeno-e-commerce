


import Link from "next/link"
import { allProducts, formatePrice } from "../utils"
import { Main, Button } from "../components"
import { Pro } from "../components/Pro"


export async function generateStaticParams() {
  return allProducts.map(prod => ({
    params: {
      product: prod.id
    }
  }))
}


async function getData({ product }: { product: string }) {
  return allProducts.find(p => p.id === product)
}



export default async function ProductPage({
  params
}: { params: { product: string } }) {

  const product = await getData(params)

  return (
    <Main>
     

      <header
      className="flex items-center justify-between max-w-[1440px] w-screen h-20 bg-[#2a2a2a]  md:px-32 max-sm:px-4 px-20"
    >

      <h1 className="font-bold text-3xl">Capputeeno</h1>

    </header>

      <div className="flex  max-w-[1440px] w-full h-[90vh] md:flex-row flex-col gap-4 text-black border-x-2 justify-center items-center">

        <section className="flex gap-10 flex-col  justify-center">
          <p className="text-lg">produto</p>

          <Link href='/' className=" text-[#617480]">
            <img src="./blackArron.svg" alt="" />
            voltar
          </Link>

          <img
            src={product?.image_url}
            alt={product?.name}
            className="md:w-[640px] w-[300px] rounded-lg"
          />

        </section>

        <section className="flex gap-10 flex-col h-[630px] justify-between">

          <div className="flex flex-col gap-10 justify-between pt-20">

            <p>{product?.category}</p>

            <h2 className="text-lg font-semibold">{product?.name}</h2>
            <p>{formatePrice(Number(product?.price_in_cents))}</p>

            <div>
              <p className="text-sm mb-3">descrição</p>
              <p className="text-sm w-44">{product?.description}</p>
            </div>

          </div>

          <Button product={product}>
            adicionar ao carrinho
          </Button>
        </section>

      </div>

    </Main>
  )
}