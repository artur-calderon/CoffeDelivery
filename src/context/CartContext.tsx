import { createContext, ReactNode, useState } from "react";


export const CartContext = createContext({} as CartContextProps)

interface CartContextProps {
  addToCart: (product: ProductProps, quantity: ProductProps) => void,
  productToCart: ProductProps[],
}

interface ProductProps {
  id: number,
  type: [],
  url: string,
  name: string,
  description: string,
  price: number,
  quantidade:number

}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [productToCart, setProductToCart] = useState<ProductProps[]>([])


  function addToCart(product: ProductProps, quantity: ProductProps) {
    const duplicatedProduct = productToCart.find(p => {return  p.id === product.id})
    if(duplicatedProduct){
      return
    }else{
      const productOnCart = Array.from(productToCart)
      productOnCart.quantidade = quantity
      setProductToCart(state => [...state, product])
    }
  }


  return (
    <CartContext.Provider value={{ addToCart, productToCart }}>
      {children}
    </CartContext.Provider>
  )
}
