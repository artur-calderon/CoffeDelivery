import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;

`
export const FormCheckOut = styled.div`
  display: flex;
  flex-direction: column;


  h1{
    font-family: ${props => props.theme.Baloo2};
    font-size: 1.125rem;
    margin-bottom: .9375rem;
    margin-top: 2.5rem;
  }

  `


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${props => props.theme["base-card"]};

  width: 40rem;
  height: 23.25rem;

 


`
export const Title = styled.div`
  display: flex;
 

  gap: .5rem;
  font-family: ${props => props.theme.Roboto};

  div p:nth-child(1){
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]};
  }
  div p:nth-child(2){
    font-size: .875rem;
    font-weight: 400;
    color: ${props => props.theme["base-text"]};
  }

  svg{
    color:${props => props.theme["yellow-dark"]};
    width: 1.5rem;
    margin-top: -.375rem;
  }

`
export const Cart = styled.div``
