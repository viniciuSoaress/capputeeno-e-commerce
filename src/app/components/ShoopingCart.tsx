import { Main, Pro } from "."
import { product } from "../types"
import { formatePrice } from "../utils"


type Props = {
  product: product[],
  onClick: () => void,
  onDelete: (id: string) => void
}


export function ShoppingCart({
  product,
  onClick,
  onDelete
}: Props) {


  let total = 0
  let products = product.length

  function handleBuy() {
    products >= 1 ?
      alert(`sua comprar foi comcluida, total de ${products} produtos`)
      :
      alert('adicione produtos ao seu carrinho')

  }

  return (
    <Main>
      <header
        className="flex items-center justify-between max-w-[1440px] w-screen h-20 bg-[#2a2a2a]  md:px-32 max-sm:px-4 px-20 mb-36"
      >

        <h1 className="font-bold text-3xl">Capputeeno</h1>

      </header>




      <div className="flex justify-center max-w-[1440px] w-full h-full mb-6 md:flex-row flex-col gap-8 text-black border-x-2  bg-[#f0f0f5]">


        <section className="flex flex-col-reverse gap-4 mb-6 relative w-[736px] pt-32">

          {
            product.map(p => {
              total += p.price_in_cents
              return (
                <Pro key={p.id} product={p} onDelete={onDelete} />
              )
            })
          }

          <div className="text-black absolute top-1 left-0 mb-6">

            <p className="flex gap-3">
              <button onClick={onClick}>
                <img src="./blackArron.svg" alt="icon" />
              </button>
              voltar
            </p>

            <h2 className="text-xl mb-2 mt-3 font-medium">seu carinho</h2>

            <p>total ({products} produtos) <span className="font-semibold">{formatePrice(total)}</span></p>

          </div>
        </section>

        <section className=" bg-[#fefefe] w-[352px] h-[700px] p-4">

          <table className="w-full">

            <thead>
              <tr>
                <th>resumo do pedido</th>
              </ tr>
            </thead>

            <tbody>
              <tr className="flex justify-between my-3 px-6">
                <td>subtotal do pedido</td>
                <td>{formatePrice(total)}</td>
              </tr>

              <tr className="flex justify-between my-3 px-6">
                <td>entrega</td>
                <td>{formatePrice(4000)}</td>
              </tr>
              <tr>
              </tr>
            </tbody>

            <tfoot>
              <tr className="flex justify-between my-3 p-6 border-t-2">
                <td>total</td>
                <td>{formatePrice(total + 4000)}</td>
              </tr>
            </tfoot>
          </table>

          <button onClick={handleBuy}
            className="bg-green-500 w-full mt-10 text-white h-11 rounded-lg"
          >
            finalizar comprar
          </button>

        </section>


      </div>

    </Main>

  )
}