

export function formatePrice(price: number){
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'brl'
  }).format(price / 100)
}

