import { ReactNode } from "react"


type Props = {}

export function Header({
}: Props) {

  return (
    <header
      className="flex items-center justify-between max-w-[1440px] w-screen h-20 bg-[#2a2a2a] md:px-40 px-20 "
    >

      <h1 className="font-bold text-lg">Capputeeno</h1>

      <div className="flex gap-1">

        <div className="flex gap-6 bg-[#f3f5f6] rounded-lg py-1 px-2">
          <input
            type="text"
            className="bg-transparent border-none text-xs outline-none text-black"
            placeholder="Procurando por algo específico?"

          />
          <img src="./search-loupe.svg" alt="icon" />
        </div>
        <img src="./shopping-bag.svg" alt="icon" />
      </div>

    </header>
  )
}