import styled from "styled-components";
import CoffeCupBackground from '../../assets/CoffeCupBackground.png'

export const HomeContainer = styled.main`
    
    display: flex;
    align-items: center;
    gap: 3.5rem;

    img{
        width:29rem;
        background-image: url(${CoffeCupBackground});
        background-repeat: no-repeat;
        background-position: center;
    }
`
export const Description = styled.div`

    h1{
      font-family: ${props => props.theme.Baloo2};
      font-size: 2.3rem;
    }

    p{
        font-family: ${props => props.theme.Roboto};
        font-size: 1.25rem;
        font-weight: 400;
    }

`



export const Details = styled.div`
    font-family: ${props => props.theme.Roboto};
   
    color: ${props => props.theme["base-text"]};

    margin-top: 4.125rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 17px; 
    grid-row-gap: 20px;

    span{
        display: flex;
        align-items: center;
        gap: .75rem;
    }

    p{
        font-size: 0.93rem;
    }
    span:nth-child(1) svg{
        background-color: ${props => props.theme["yellow-dark"]};
        padding: .5rem;
        border-radius:100%;
    }
    span:nth-child(2) svg{
        background-color: ${props => props.theme["base-text"]};
        padding: .5rem;
        border-radius:100%;
    }
    span:nth-child(3) svg{
        background-color: ${props => props.theme["yellow"]};
        padding: .5rem;
        border-radius:100%;
    }
    span:nth-child(4) svg{
        background-color: ${props => props.theme.purple};
        padding: .5rem;
        border-radius:100%;
    }
    
`
