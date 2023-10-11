import { product } from "../types"
import { formatePrice } from "../utils"


type Props = {
  product: product
}


export function Product({
  product
}: Props) {

  return (
    <section className=" rounded-t-lg">
      <img
        src={product.image_url}
        alt={product.name}
        height={300}
        width={256}
        className="rounded-t-lg"
      />

      <div className="h-20 px-2 py-2 flex flex-col gap-2 bg-[#fefefe] text-black">
        <p>{product.name}</p>
        <hr />
        <h3>{formatePrice(product.price_in_cents)}</h3>
      </div>
    </section>
  )
}