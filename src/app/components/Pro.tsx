import { product } from "../types";
import { formatePrice } from "../utils";

type Props = {
  product: product,
  onDelete: (id: string) => void
}

export function Pro({
  product,
  onDelete
}: Props) {

  return (
    <article className="flex md:w-[736px] md:flex-row flex-col m-auto bg-white w-[380px] md:h-52 h-auto rounded-l-lg">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-[256px] h-52 rounded-l-lg"
      />

      <div className="flex  flex-col justify-between p-4 rounded-l-lg ml-7">

        <h2 className="flex justify-between text-xl">
          {product.name}
          <button onClick={() => onDelete(product.id)}>
            <img src="./delete.svg" alt="icon" />
          </button>
        </h2>

        <p>{product.description}</p>

        <p>{formatePrice(product.price_in_cents)}</p>

      </div>
    </article>
  )
}