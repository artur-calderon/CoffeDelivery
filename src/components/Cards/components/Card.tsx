
import { Card1, CardBody, CardFooter, CardImage, QuantityContainer } from "../styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {  MouseEventHandler, useState } from "react";

interface CardType{
    id:number,
    type:[],
    url:string,
    name:string,
    description:string,
    price:number,
    
    
}

function FormatNumber(number: number) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

export function Card({ ...props }:CardType){
    console.log(props.price)
    const [quantitySum, setQuantitySum] = useState(1)
    const [preco, setPreco] = useState(props.price)

    function QuantitySum(event:MouseEventHandler){
        console.log(event.target.id)
        if(event.target.id === '+'){
            setQuantitySum(prev => prev += 1)
            setPreco(prev => prev + props.price)
        }else if(event.target.id === '-'){
            if(quantitySum <= 1) return
            setQuantitySum(prev => prev -=1)
            setPreco(prev => prev - props.price)
        }
    }

    return(
        <Card1 key={props.id} >
            <CardImage src={props.url}></CardImage>
            <CardBody>
                {
                    props.type.map(tipo => {
                        return <span key={tipo}>{tipo}</span>
                    })
                }
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </CardBody>
            <CardFooter>
                <p>R$</p>{' '}<span>{FormatNumber(preco)}</span>
                <QuantityContainer >
                    <Minus size={32} weight="fill" id='-'  onClick={QuantitySum}/>
                    <input type='number' min='1' placeholder="1" value={quantitySum}/>
                    <Plus size={32} weight="fill"  id='+' onClick={QuantitySum} />
                </QuantityContainer>
                <ShoppingCart size={32} color='#fff' weight="fill"  />
            </CardFooter>
        </Card1>
    )
}