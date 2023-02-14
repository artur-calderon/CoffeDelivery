import { SuccessContainer } from "./styles";
import Illustration from '../../assets/Illustration.svg'
import Local from '../../assets/local.svg'
import time from '../../assets/time.svg'
import money from '../../assets/money.svg'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Success() {

    const { userInfo } = useContext(CartContext)
    console.log(userInfo)

    
    return (
        <SuccessContainer>
            <div className="titleAndDetailsOrder">
                <h1>Uhu! Pedido confirmado</h1>
                <h4>Agora é só aguardar que logo o café chegará até você</h4>

                <div className="detailsOrder">
                    <p>
                        <img src={Local} alt="" />
                        Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
                    </p>

                    <p>
                        <img src={time} alt="" />
                        Previsão de entrega <br/> 20 min - 30 min
                    </p>

                    <p>
                        <img src={money} alt="" />
                        Pagamento na entrega <br /> Cartão de Crédito
                    </p>
                </div>
            </div>
            <img src={Illustration} alt="" />
        </SuccessContainer>
    )
}
