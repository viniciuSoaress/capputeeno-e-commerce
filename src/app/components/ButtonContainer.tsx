'use client'

import { Dispatch, SetStateAction, useState } from "react"


type Props = {
  state: Dispatch<SetStateAction<string>>
}

export function ButtonContainer({
  state
}: Props) {

  const [is, setIs] = useState('')

  function handle(name: string) {
    state(name)
    setIs(name)
  }

  return (
    <ul className="flex gap-10 max-w-[1440px] w-screen text-black md:px-32 px-10 py-10 text-xl border-x">
      <li>
        <button
          className={`${is === '' && 'border-b-4 font-medium border-[#2a2a2a]'}`}
          onClick={() => handle('')}>todos os produtos</button>
      </li>
      <li>
        <button
          className={`${is === 'caneca' && 'border-b-4 font-medium border-[#2a2a2a]'}`}
          onClick={() => handle('caneca')}>canecas</button>
      </li>
      <li>
        <button
          className={`${is === 'camiseta' && 'border-b-4 font-medium border-[#2a2a2a]'}`}
          onClick={() => handle('camiseta')}>camisetas</button>
      </li>

    </ul>
  )
} 