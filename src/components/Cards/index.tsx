import { CardsContainer } from "./styles";
import { coffeTypes } from '../../coffeTypes'
import { Card } from "./components/Card";




export function Cards() {

    return (
        <CardsContainer>
            {
                coffeTypes.map(coffe => {
                    return <Card {...coffe} key={coffe.id} />

                })
            }
        </CardsContainer>
    )
}