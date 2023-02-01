import { Card, CardBody, CardFooter, CardImage, CardsContainer, QuantityContainer } from "./styles";
import { coffeTypes } from '../../coffeTypes'
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";



function FormatNumber(number: number) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

export function Cards() {
    const [quantitySum, setQuantitySum] = useState<number>(1)


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
                                        return <span key={type}>{type}</span>
                                    })
                                }
                                <h1>{coffe.name}</h1>
                                <p>{coffe.description}</p>
                            </CardBody>
                            <CardFooter>
                                <p>R$</p>{' '}<span>{FormatNumber(coffe.price)}</span>
                                <QuantityContainer>
                                    <Minus size={32} weight="fill" onClick={() => setQuantitySum(prev => prev -= 1)} />
                                    <input type='number' min='1' placeholder="1" value={quantitySum} />
                                    <Plus size={32} weight="fill" onClick={() => setQuantitySum(prev => prev += 1)} />
                                </QuantityContainer>
                                <ShoppingCart size={32} color='#fff' weight="fill" />
                            </CardFooter>
                        </Card>
                    )
                })
            }


        </CardsContainer>
    )
}