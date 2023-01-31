import { Description, HomeContainer, Details } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";


import CoffeCup from '../../assets/CoffeCup.png'

export function Home() {
  return (
    <HomeContainer>
      <Description>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <Details>
          <span><ShoppingCart size={32} color='#fff' weight="fill" /><p> Compra simples e segura</p></span>
          <span><Package size={32} color='#fff' weight="fill" /><p>Embalagem mantém o café intacto</p></span>

          <span><Timer size={32} color='#fff' weight="fill" /><p>Entrega rápida e rastreada</p></span>
          <span><Coffee size={32} color='#fff' weight="fill" /><p>O café chega fresquinho até você</p></span>

        </Details>
      </Description>
      <img src={CoffeCup} alt="" />
    </HomeContainer>
  )
}