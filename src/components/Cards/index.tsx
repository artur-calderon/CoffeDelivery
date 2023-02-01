import { Card, CardBody, CardFooter, CardImage, CardsContainer, Quantity } from "./styles";
import { coffeTypes } from '../../coffeTypes'
import { ShoppingCart } from "phosphor-react";



function FormatNumber(number:number){
    return number.toLocaleString('pt-BR',{minimumFractionDigits:2})
}

export function Cards() {
    return (
        <CardsContainer>
            {
                coffeTypes.map(coffe => {
                    return (
                        <Card key={coffe.id}>
                            <CardImage src={coffe.url}></CardImage>
                            <CardBody>
                                {
                                    coffe.type.map(type => {
                                        return <span>{type}</span>
                                    })
                                }
                                <h1>{coffe.name}</h1>
                                <p>{coffe.description}</p>
                            </CardBody>
                            <CardFooter>
                                <span>R$ {FormatNumber(coffe.price)}</span>
                                <Quantity type='number' min='1' placeholder="1"/>
                                <ShoppingCart size={32} color='#fff' weight="fill" />
                            </CardFooter>
                        </Card>
                    )
                })
            }


        </CardsContainer>
    )
}