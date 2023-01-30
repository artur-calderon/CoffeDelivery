import { Description, HomeContainer, Details } from "./styles";
import {  ShoppingCart } from "phosphor-react";


import CoffeCup from '../../assets/CoffeCup.png'

export function Home() {
  return (
    <HomeContainer>
      <Description>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <Details>
          <span><ShoppingCart size={32} color='#fff' weight="fill" />Compra simples e segura</span>
          <span>Entrega rápida e rastreada</span>
          <span>Embalagem mantém o café intacto</span>
          <span>O café chega fresquinho até você</span>
        </Details>
      </Description>
      <img src={CoffeCup} alt="" />
    </HomeContainer>
  )
}