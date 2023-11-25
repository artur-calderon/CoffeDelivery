
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Cart, CartContainer, CartProducts, CheckoutContainer, DescriptionProduct, Form, FormCheckOut, Pagamento, Payment, Products, Title, PaymentButton } from "./styles";


interface UserAddressForm {
  rua: string,
  numero: number,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string
}


export function Checkout() {

  const { productToCart, removeFromCart, userAddressOrder, userInfo } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [subTotal, setSubTotal] = useState(0)

  const { register, handleSubmit } = useForm<UserAddressForm>()


  function FormatNumber(number: number) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }

  useEffect(() => {
    if (productToCart.length >= 1) {
      let subTot = 0;
      productToCart.map(prod => {
        let totalUnit = prod.price * prod.quantidade
        subTot += totalUnit
        setSubTotal(subTot)
        let totall = subTot + 3.50
        setTotal(totall)
      })
    }

  }, [])

  function handleRemoveFromCart(id: number) {
    productToCart.map(prod => {
      if (prod.id === id) {
        setSubTotal(subTotal - prod.price * prod.quantidade)
        removeFromCart(id)
        setTotal(state => state - (prod.price * prod.quantidade))
      }
    })
  }
  function sendClientData(data: UserAddressForm) {
    userAddressOrder(data)

  }

  return (
    <CheckoutContainer>
      <FormCheckOut>
        <h1>Complete seu pedido</h1>
        <Form onSubmit={handleSubmit(sendClientData)} id="formUserInfo">
          <Title>
            <MapPinLine size={32} weight="thin" />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Title>
          <div className="first">
            <input type="text" name="CEP" placeholder="CEP" />
            <input type="text" {...register("rua")} placeholder="Rua" />
          </div>
          <div className="secondGroupInput">
            <input type="text" {...register("numero")} placeholder="Número" />
            <input type="text" {...register("complemento")} placeholder="Complemento" />
            <input type="text" {...register("bairro")} placeholder="Bairro" />
            <input type="text" {...register("cidade")} placeholder="Cidade" />
            <input type="text" {...register("uf")} placeholder="UF" />
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
                        <button onClick={() => handleRemoveFromCart(product.id)}>
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

          <PaymentButton form="formUserInfo">COMFIRMAR PEDIDO</PaymentButton>

        </CartContainer>
      </Cart>
    </CheckoutContainer >
  )
}