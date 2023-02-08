
import { Card1, CardBody, CardFooter, CardImage, QuantityContainer } from "../styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";



function FormatNumber(number: number) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}



interface ProductProps {
    id: number,
    type: [],
    url: string,
    name: string,
    description: string,
    price: number,
    quantidade:number

}

export function Card({ ...props }) {
    const [quantitySum, setQuantitySum] = useState(1)
    const [preco, setPreco] = useState(props.price)

    const { addToCart } = useContext(CartContext)

    function QuantitySum(event: FormEvent) {
        event.preventDefault();

        if (event.currentTarget.id === '+') {
            setQuantitySum(prev => prev += 1)
            setPreco((prev: number) => prev + props.price)

        } else if (event.currentTarget.id === '-') {
            if (quantitySum <= 1) return
            setQuantitySum(prev => prev -= 1)
            setPreco((prev: number) => prev - props.price)
        }
    }

    function handleAddToCart(data: any) {
        console.log(data)

    }



    return (
        <Card1 key={props.id} >
            <CardImage src={props.url}></CardImage>
            <CardBody>
                {
                    props.type.map((tipo: string) => {
                        return <span key={tipo}>{tipo}</span>
                    })
                }
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </CardBody>
            <CardFooter>
                <p>R$</p>{' '}<span>{FormatNumber(preco)}</span>
                <QuantityContainer>

                    <button type="button" id='-' onClick={QuantitySum}>
                        <Minus size={32} weight="fill" />
                    </button>

                    <input type='number' disabled min='1' placeholder="1" value={quantitySum} onChange={(e) => setQuantitySum(parseInt(e.target.value))} />

                    <button type="button" id='+' onClick={QuantitySum}>
                        <Plus size={32} weight="fill" />
                    </button>
                </QuantityContainer>
                <ShoppingCart size={32} color='#fff' weight="fill" onClick={() => addToCart({ ...props } as ProductProps, quantitySum as unknown as ProductProps)} />
            </CardFooter>
        </Card1>
    )
} 