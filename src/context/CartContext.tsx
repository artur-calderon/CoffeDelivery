import { createContext, ReactNode, useState } from "react";


export const CartContext = createContext({} as CartContextProps)

interface CartContextProps {
  addToCart: (product: ProductProps, quantity: ProductProps) => void,
  productToCart: ProductProps[],
  removeFromCart: (id: number) => void
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
      product.quantidade = quantity
      setProductToCart(state => [...state, product])
    }
  }

  function removeFromCart(id: number){
      const removeItemById = productToCart.filter(prod => {
        return prod.id != id
      })
      setProductToCart(removeItemById)
      
  }


  return (
    <CartContext.Provider value={{ addToCart, productToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
