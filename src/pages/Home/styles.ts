import styled from "styled-components";


export const HomeContainer = styled.main`
    display: flex;
    align-items: center;
    gap: 3.5rem;

    img{
        width:29rem;
    }
`
export const Description = styled.div`

    h1{
      font-family: ${props => props.theme.Baloo2};
      font-size: 2.3rem;
    }

    p{
        font-family: ${props=> props.theme.Roboto};
        font-size: 1.25rem;
        font-weight: 400;
    }

`

export const Details = styled.div`
    span:nth-child(1) svg{
        background-color: ${props => props.theme["yellow-dark"]};
        padding: .5rem;
        border-radius:100%;
    }
    span2 svg{
        background-color: blue;
    }
`
