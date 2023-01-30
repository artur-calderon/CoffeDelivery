import { CartIcon, HeaderContainer, IconsWrapper } from "./styles";
import Logo from '../../assets/Logo.png';
import { MapPin, ShoppingCart } from "phosphor-react";


export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <IconsWrapper>
        <div>
          <MapPin size={22} color='#8047F8' weight="fill" />
          <span>Ji-Paraná, RO</span>
        </div>
        <CartIcon>
          <ShoppingCart size={22} color='#C47F17' weight="fill" />
        </CartIcon>
      </IconsWrapper>

    </HeaderContainer>
  )
}