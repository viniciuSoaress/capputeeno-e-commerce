import { ReactNode } from "react"


type Props = {
  children: ReactNode
}


export function Main({
  children
}: Props) {

  return (
    <main className="flex flex-col w-screen justify-center items-center">
      {children}
    </main>
  )
}