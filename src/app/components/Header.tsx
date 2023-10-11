

import { ChangeEvent } from "react"
import { useCont } from "../hooks"

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Header({
  onChange,

}: Props) {


  const { handleIsClick } = useCont()

  return (
    <header
      className="flex items-center justify-between max-w-[1440px] w-screen h-20 bg-[#2a2a2a]  md:px-32 max-sm:px-4 px-20"
    >

      <h1 className="font-bold text-3xl">Capputeeno </h1>

      <div className="flex gap-1">

        <div className="flex gap-6 bg-[#f3f5f6] rounded-lg py-1 px-2 mr-1">
          <input
            type="text"
            className="bg-transparent border-none text-xs outline-none text-black"
            placeholder="Procurando por algo específico?"
            onChange={e => onChange(e)}
          />
          <img src="./search-loupe.svg" alt="icon" />
        </div>
        <button onClick={handleIsClick}>
          <img src="./shopping-bag.svg" alt="icon" />
        </button>
      </div>

    </header>
  )
}