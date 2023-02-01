import { CartIcon, HeaderContainer, IconsWrapper } from "./styles";
import Logo from '../../assets/Logo.png';
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={Logo} alt="" />
      </NavLink>

      <IconsWrapper>
        <div>
          <MapPin size={22} color='#8047F8' weight="fill" />
          <span>Ji-Paraná, RO</span>
        </div>
        <NavLink to='/checkout'>

          <CartIcon>
            <ShoppingCart size={22} color='#C47F17' weight="fill" />
          </CartIcon>

        </NavLink>
      </IconsWrapper>

    </HeaderContainer>
  )
}