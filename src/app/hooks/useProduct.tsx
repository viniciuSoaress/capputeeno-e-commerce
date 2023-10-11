'use client'

import { ChangeEvent, useState } from "react"


export function useProduct() {

  const [name, setName] = useState('')

  function handleNameChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setName(e.target.value)
  }

  console.log(name);
  

  return {
    name,
    handleNameChange,
    setName
  }
}