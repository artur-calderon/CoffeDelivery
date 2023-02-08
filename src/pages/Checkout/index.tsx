
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Cart, CartContainer, CartProducts, CheckoutContainer, DescriptionProduct, Form, FormCheckOut, Pagamento, Payment, Products, Title } from "./styles";

export function Checkout() {

  const { productToCart } = useContext(CartContext)

  function FormatNumber(number: number) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
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
                console.log(product.quantidade)
                return (
                  <Products>
                    <img src={product.url} alt="" />
                    <DescriptionProduct>
                      <div className="priceDescription">
                        <span>{product.name}</span>
                        <span>R$ {FormatNumber(product.price)}</span>
                      </div>
                      <div className="buttonsDescription">
                        <button>{product.quantidade}</button>
                        <button>
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
              <span>R$ 29,70</span>
              <span>R$ 3,50</span>
              <span>R$ 33,20</span>
            </div>
          </Payment>
          <button>COMFIRMAR PEDIDO</button>
        </CartContainer>
      </Cart>
    </CheckoutContainer >
  )
}