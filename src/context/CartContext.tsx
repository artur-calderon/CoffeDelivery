import { createContext, ReactNode, useState } from "react";


export const CartContext = createContext({} as CartContextProps)

interface CartContextProps {
  addToCart: (product: ProductProps, quantity: number) => void,
  productToCart: ProductProps[],
  removeFromCart: (id: number) => void,
  userAddressOrder: (data:UserAddressForm) => void,
  userInfo:UserAddressForm | undefined
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

interface UserAddressForm{
  rua: string,
  numero:number,
  complemento: string,
  bairro:string,
  cidade:string,
  uf:string
}

export function CartProvider({ children }: CartProviderProps) {
  const [productToCart, setProductToCart] = useState<ProductProps[]>([])
  const [userInfo, setUserInfo] = useState<UserAddressForm>()



  function addToCart(product: ProductProps, quantity: number) {
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

  function userAddressOrder(data: UserAddressForm){
    setUserInfo(data)
  }


  return (
    <CartContext.Provider value={{ addToCart, productToCart, removeFromCart, userAddressOrder , userInfo }}>
      {children}
    </CartContext.Provider>
  )
}
