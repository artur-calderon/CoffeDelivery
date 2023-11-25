import { Description, HomeContainer, Details, CardContainer, Title } from "./styles";
import { Package, ShoppingCart, Timer } from "phosphor-react";
import OrangeSlice from "../../assets/orange-slice-thin.svg"


import LemonadeCup from '../../assets/CoffeImages/limonada.jpg'
import { Cards } from "../../components/Cards";


export function Home() {
  return (
    <>
      <HomeContainer>
        <Description>
          <h1>Find the perfect lemonade for any time of day</h1>
          <p>With DisFruta you can receive your lemonade wherever you are, at any time</p>
          <Details>
            <span><ShoppingCart size={32} color='#fff' weight="fill" /><p>Simple and secure purchase</p></span>
            <span><Package size={32} color='#fff' weight="fill" /><p>Packaging keeps the lemonade intact</p></span>

            <span><Timer size={32} color='#fff' weight="fill" /><p>Fast and tracked delivery</p></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#fff" viewBox="0 0 256 256"><path d="M248,84H8a4,4,0,0,0-4,4,124,124,0,0,0,248,0A4,4,0,0,0,248,84ZM71.53,150.13,124,97.66V171.9A83.67,83.67,0,0,1,71.53,150.13Zm-5.66-5.66A83.67,83.67,0,0,1,44.1,92h74.24ZM132,97.66l52.47,52.47A83.67,83.67,0,0,1,132,171.9Zm58.13,46.81L137.66,92H211.9A83.67,83.67,0,0,1,190.13,144.47ZM128,204A116.14,116.14,0,0,1,12.07,92h24a92,92,0,0,0,183.82,0h24A116.14,116.14,0,0,1,128,204Z"></path></svg><p>Lemonade comes to you fresh</p></span>

          </Details>
        </Description>
        <img src={LemonadeCup} alt="" />
      </HomeContainer>
      <CardContainer>
        <Title>Take your Order</Title>
        <Cards />
      </CardContainer>
    </>
  )
}