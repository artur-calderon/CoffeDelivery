import { CartIcon, HeaderContainer, IconsWrapper } from "./styles";
import Logo from '../../assets/disfrutaLogo.png';
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";


export function Header() {
  const { productToCart } = useContext(CartContext)
  const [local, setLocal] = useState('No Address')

  // useEffect(() => {



  // }, [])

  function GetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) { // callback de sucesso
        // ajusta a posição do marker para a localização do usuário
        var url = `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
        fetch(url).then(res => {
          const data = res.json()
          data.then(geo => {
            const userLocal = geo.address.city + ", " + geo.address.state
            setLocal(userLocal)
          })
        })
      },
        function (error) { // callback de erro
          alert('Erro ao obter localização!');
          console.log('Erro ao obter localização.', error);
        });
    } else {
      console.log('Navegador não suporta Geolocalização!');
    }
  }
  GetLocation()
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={Logo} alt="" />
      </NavLink>

      <IconsWrapper>
        <div>
          <MapPin size={22} color='#8047F8' weight="fill" />
          <span>{local}</span>
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