'use client'

import { ReactNode, createContext, useContext, useState } from "react";



type product = {
  name: string;
  id: string;
  price_in_cents: number;
  description: string;
  image_url: string;
  created_at: string;
  sales: number;
  category: string;
}

type Provider = {
  is: boolean,
  handleIsClick: () => void,
  handleAddProduct: (item: product) => void,
  product: product[],
  handleDelete: (id: string) => void
}

const ContextUse = createContext<Provider | null>(null)

export function UseProvider({
  children
}: { children: ReactNode }) {

  const [is, setIs] = useState(false)
  const [product, setProduct] = useState<product[]>([])
  console.log(product)


  function handleIsClick() {
    setIs(i => !i)
  }

  function handleAddProduct(item: product) {
    setProduct((prev) => ([
      ...prev,
      {
        category: item.category,
        name: item.name,
        created_at: item.created_at,
        description: item.description,
        id: item.id,
        image_url: item.image_url,
        price_in_cents: item.price_in_cents,
        sales: item.sales
      }
    ]))
  }

  function handleDelete(id: string){
    setProduct(product.filter(pr => pr.id !== id))
  }



  return (
    <ContextUse.Provider value={{
      is,
      handleIsClick,
      handleAddProduct,
      product,
      handleDelete,
    }}>
      {children}
    </ContextUse.Provider>
  )
}

export function useCont() {
  const context = useContext(ContextUse)

  if (!context) {
    throw new Error('context não pode ser usado')
  }

  return context
}

