import { allProducts } from "../utils/data"


export async function generateStaticParams(){
  return allProducts.map(prod => ({
    params: {
      product: prod.id
    }
  }))
}


async function getData({product}: {product: string}){
  return allProducts.find(p => p.id === product)
}



export default async function ProductPage({
  params
}: {params: {product: string}}){

  const product = await getData(params)

  return (
    <main>
      <h1>page product</h1>
      <p>{product?.name}</p>
      <img src={product?.image_url} alt="" />
    </main>
  )
}