
import { MapPinLine } from "phosphor-react";
import { Cart, CheckoutContainer, Form, FormCheckOut, Title } from "./styles";

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

          <input type="text" name="CEP" placeholder="CEP" />
          <input type="text" name="RUA" placeholder="Rua" />

        </Form>
      </FormCheckOut>
      <Cart>

      </Cart>
    </CheckoutContainer >
  )
}