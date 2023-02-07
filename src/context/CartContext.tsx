import { createContext, ReactNode, useState } from "react";


export const CartContext = createContext({} as CartContextProps)

interface CartContextProps {
  addToCart: (product: ProductProps) => void,
  productToCart: ProductProps[]
}

interface ProductProps {
  id: number,
  type: [],
  url: string,
  name: string,
  description: string,
  price: number,

}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [productToCart, setProductToCart] = useState<ProductProps[]>([])


  function addToCart(product: ProductProps) {
    console.log(product)
    setProductToCart(state => [...state, product])
  }


  return (
    <CartContext.Provider value={{ addToCart, productToCart }}>
      {children}
    </CartContext.Provider>
  )
}
