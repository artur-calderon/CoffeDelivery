import styled from "styled-components";



export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;

`

export const Card = styled.div`
    width: 16rem;
    height: 19.375rem;
    padding: 1.25rem;

    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;

`
export const CardImage = styled.img`
    width: 6.5rem;
    height: 6.5rem;
    position: absolute;
    top: -20px;
`
export const CardBody = styled.div`
    text-align: center;

    h1{
        font-family: ${props => props.theme.Baloo2};
        font-weight: 800;
        font-size: 1.25rem;
        padding-top: 1rem;
    }
    span{
        font-family: ${props => props.theme.Roboto};
        font-weight: normal;
        font-size: .625rem;
        margin-left: .3125rem;

        color: ${props => props.theme["yellow-dark"]};
        background-color: ${props => props.theme["yellow-light"]};

        width: 5.0625rem;
        height: 5.0625rem;
        border-radius: 100px;
        padding: .25rem .5rem;

        margin-top: .75rem;
    }

    p{
        font-family: ${props => props.theme.Roboto};
        font-size: .875rem;
        color: ${props=> props.theme["base-label"]};
        
        margin-top: .5rem;
    }

`
export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.0625rem;
    font-family: ${props => props.theme.Roboto};

    span{
        font-weight:bold;
    }

    input{
        margin-left: 1rem;
        border: 0;
        border-radius: 6px;

        text-align: center;

        padding: .5rem;


        background-color: ${props => props.theme["base-button"]};
        width: 4.5rem;
    }

    svg{
        background-color: ${props => props.theme["purple-dark"]};
        margin-left: .5rem;
        padding: .5rem;

        border-radius: 6px
    }
`

export const Quantity = styled.input``
