'use client'

import { useCont } from "../hooks";
import { product } from "../types";


type Props = {
  children: React.ReactNode,
  product: product
}


export function Button({
  children,
  product
}: Props) {

  const {handleAddProduct} = useCont()

  return (
    <button
      className="bg-blue-500 text-white h-11 rounded-lg"
      onClick={() => handleAddProduct(product)}
    >
      {children}
    </button>
  )
}