
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { Cart, CartContainer, CartProducts, CheckoutContainer, DescriptionProduct, Form, FormCheckOut, Pagamento, Payment, Products, Title } from "./styles";

export function Checkout() {
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
            <Products>
              <img src="https://th.bing.com/th/id/R.0761f7ec8d43ca424fa078775b322cc9?rik=vW0JriMSX%2fJESw&riu=http%3a%2f%2fmpmco.com%2fwp-content%2fuploads%2f2018%2f02%2fplaceholder.jpg&ehk=Ma%2beNkBomEexasJFRkD57DmdZ4UvtjUYu%2f5L%2bkSG4as%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <DescriptionProduct>
                <div className="priceDescription">
                  <span>Expresso Tradicional</span>
                  <span>R$ 9.90</span>
                </div>
                <div className="buttonsDescription">
                  <button>1</button>
                  <button>
                    <Trash size={32} weight="thin" color="#8047F8" />
                    REMOVER
                  </button>
                </div>
              </DescriptionProduct>
            </Products>
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