

type Products = {
  name: string;
  id: string;
  price_in_cents: number;
  description: string;
  image_url: string;
  created_at: string;
  sales: number;
  category: string;

}[]


export function searchProduct(products: Products, name: string) {

  name = name.toLocaleLowerCase()
  return products.filter(item => 
   item.name.split(' ').some(prod => 
    prod.toLocaleLowerCase().startsWith(name)  )
  )
}