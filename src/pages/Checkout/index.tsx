
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Cart, CartContainer, CartProducts, CheckoutContainer, DescriptionProduct, Form, FormCheckOut, Pagamento, Payment, Products, Title } from "./styles";

export function Checkout() {

  const { productToCart, removeFromCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  // const [totalUnitario, setTotalUnitario] = useState(0)
  const [subTotal, setSubTotal] = useState(0)

  function FormatNumber(number: number) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

useEffect(()=>{
  if(productToCart.length >=1){
    let subTot = 0;
    productToCart.map(prod => {
      let totalUnit = prod.price * prod.quantidade
      subTot += totalUnit
      setSubTotal(subTot)
      let totall = subTot + 3.50
      setTotal(totall)
    })
  }

},[])

  function handleRemoveFromCart(id:number){
    productToCart.map(prod => {
      if(prod.id === id){
        setSubTotal(subTotal - prod.price * prod.quantidade)
        setTotal(state => state - prod.price * prod.quantidade)
        removeFromCart(id)
      }
    })
  }


  return (
    <CheckoutContainer>
      <FormCheckOut>
        <h1>Complete seu pedido</h1>
        <Form>
          <Title>
            <MapPinLine size={32} weight="thin" />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Title>
          <div className="first">
            <input type="text" name="CEP" placeholder="CEP" />
            <input type="text" name="RUA" placeholder="Rua" />
          </div>
          <div className="secondGroupInput">
            <input type="text" name="numero" placeholder="Número" />
            <input type="text" name="complemento" placeholder="Complemento" />
            <input type="text" name="bairro" placeholder="Bairro" />
            <input type="text" name="Cidade" placeholder="Cidade" />
            <input type="text" name="UF" placeholder="UF" />
          </div>
        </Form>

        <Pagamento>
          <Title>
            <CurrencyDollar size={32} weight="thin" color="#8047F8" />
            <div>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </Title>
          <div className="Buttons">
            <button>
              <CreditCard size={20} weight="thin" color="#8047F8" />
              <span>CARTÃO DE CRÉDITO</span>
            </button>
            <button>
              <Bank size={20} weight="thin" color="#8047F8" />
              <span>CARTÃO DE DÉBITO</span>
            </button>
            <button>
              <Money size={20} weight="thin" color="#8047F8" />
              <span>DINHEIRO</span>
            </button>
          </div>
        </Pagamento>
      </FormCheckOut>
      <Cart>
        <h1>Cafés selecionados</h1>
        <CartContainer>
          <CartProducts>
            {
              productToCart.map(product => {
                return (
                  <Products key={product.id}>
                    <img src={product.url} alt="" />
                    <DescriptionProduct>
                      <div className="priceDescription">
                        <span>{product.name}</span>
                        <span>R$ {FormatNumber(product.price * product.quantidade)}</span>
                      </div>
                      <div className="buttonsDescription">
                        <button>{product.quantidade}</button>
                        <button onClick={()=> handleRemoveFromCart(product.id)}>
                          <Trash size={32} weight="thin" color="#8047F8" />
                          REMOVER
                        </button>
                      </div>
                    </DescriptionProduct>
                  </Products>
                )
              })
            }

          </CartProducts>
          <Payment>
            <div className="paymentDetails">
              <span>Total de itens</span>
              <span>Entrega</span>
              <span>Total</span>
            </div>

            <div className="paymentPrice">
              <span>R$ {FormatNumber(subTotal)}</span>
              <span>R$ 3,50</span>
              <span>R$ {FormatNumber(total)}</span>
            </div>
          </Payment>
          <button>COMFIRMAR PEDIDO</button>
        </CartContainer>
      </Cart>
    </CheckoutContainer >
  )
}