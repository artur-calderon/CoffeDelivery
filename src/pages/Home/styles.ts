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
        mix-blend-mode: multiply;
    }

    @media screen and (max-width: 568px){
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content:center;
    padding: 0 1rem;
    img{
        width: 20rem;
    }
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

    @media screen and (max-width: 568px){
    svg{
        width: 3rem;
    }
  }
    
`

export const CardContainer = styled.main`
    margin-top: 8rem;
    margin-bottom: 2.125rem;

 

`
export const Title = styled.h1`
    font-family: ${props => props.theme.Baloo2};
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 3.375rem;

`