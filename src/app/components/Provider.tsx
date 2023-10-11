'use client'

import { UseProvider } from "../hooks"


type Props = {
  children: React.ReactNode
}

export function Provider({
  children
}: Props){

  return(
    <UseProvider>
      {children}
    </UseProvider>
  )
}