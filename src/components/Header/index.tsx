import { CartIcon, HeaderContainer, IconsWrapper } from "./styles";
import Logo from '../../assets/Logo.png';
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export function Header() {
  const { productToCart } = useContext(CartContext)

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
            {
              productToCart.length >= 1 ? <div className="quantityBall">{productToCart.length}</div> : null
            }
            <ShoppingCart size={22} color='#C47F17' weight="fill" />
          </CartIcon>

        </NavLink>
      </IconsWrapper>

    </HeaderContainer>
  )
}