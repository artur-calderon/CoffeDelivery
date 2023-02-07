import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap:2rem;

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
  border-radius:6px;

  input{
    
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;
    background-color: ${props => props.theme["base-input"]};
    padding: .75rem;
    outline: none;
    height: 2.625rem;

    font-family: ${props => props.theme.Roboto};
    color: ${props => props.theme["base-label"]};
    font-size: .875rem;
  }
  .first{
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-bottom: 1rem;
    input:nth-child(1){
      width: 12.5rem;
   }
  }
 
   .secondGroupInput{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      

    input:nth-child(1){
      width: 12.5rem;
      margin-bottom: .75rem;
    }
    input:nth-child(2){
      flex: 1;
      margin-bottom: 1rem;
      margin-left: .75rem;
    }
  
    input:nth-child(3){
      width: 12.5rem;
      margin-right: 0.75rem;
    }
    input:nth-child(4){
      width: 15.75rem;
    }
    input:nth-child(5){
      width: 3.75rem;
      margin-left: .75rem;
    }

   }


`
export const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;

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

export const Pagamento = styled.div`
  margin-top: .75rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 2.5rem;
  background-color: ${props => props.theme["base-card"]};

  
  .Buttons{
    display: flex;
    gap: .75rem;


    button{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 11.1669rem;
      gap: .3rem;
      border:0;
      height: 3.1875rem;
      border-radius: 6px;
      background-color: ${props => props.theme["base-button"]};
      padding: 1rem;

      cursor: pointer;
      font-size: 0.8rem;
      font-family: ${props => props.theme.Roboto};
      color: ${props => props.theme["base-text"]};
      
      transition: 0.5s all ease;
    }
  
    button:hover{
      background-color: ${props => props.theme["base-hover"]};
    }
    button:focus{
      background-color: ${props => props.theme["purple-light"]};
      border: 1px solid ${props => props.theme.purple};
    }
   
  }
  
`



export const Cart = styled.div`

  h1{
    font-family: ${props => props.theme.Baloo2};
    font-size: 1.125rem;
    margin-bottom: .9375rem;
    margin-top: 2.5rem;
  }
`

export const CartContainer = styled.div`
  width: 28rem;
  height: 31.125rem;
  background-color: ${props => props.theme["base-card"]};
  padding: 3rem;

  border-radius: 6px 44px;

  >button{
    width: 100%;
    border: 0;
    margin-top: 1.5rem;

    background-color: ${props => props.theme.yellow};

    padding: .75rem .5rem;
    border-radius: 6px;
    font-family: ${props => props.theme.Roboto};
    font-style: normal;
    font-weight: 700;
    font-size: .875rem;
    line-height: 160%;
    color:${props => props.theme.white};

    cursor: pointer;
  }
  >button:hover{
    background-color: ${props => props.theme["yellow-dark"]};
  }

`

export const CartProducts = styled.div``


export const Products = styled.div`
  width: 23rem;

  display: flex;
  gap:1.25rem;
  padding: 2rem 0;
  border-bottom:1px solid #E6E5E5;
  

  img{
    width: 4rem;
  }

`


export const DescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${props => props.theme.Roboto};


  .priceDescription {
    display: flex;
    flex: 1;
    color:${props => props.theme["base-subtitle"]};
    width: 100%;
    justify-content: space-between;
  }
  .priceDescription span:nth-child(2){
    font-weight: 700;
    color: ${props => props.theme["base-text"]};
  }

  button{
    width: 5rem;
    height: 2rem;
    padding: 0 .5rem;
    cursor: pointer;
    background-color: ${props => props.theme["base-button"]};
    border:0;
    border-radius: 6px;
    font-family: ${props => props.theme.Roboto};
    font-size: .75rem;
    color: ${props => props.theme["base-text"]};
  }

  button:hover{
      background-color: ${props => props.theme["base-hover"]};
    }
  .buttonsDescription{
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  
  .buttonsDescription button:nth-child(2){
    display: flex;
    align-items: center;
    gap: .25rem;
    font-size: .65rem;
  }
  
  `


export const Payment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  margin-top: 1.5938rem;

  font-family: ${props => props.theme.Roboto};
  color: ${props => props.theme["base-text"]};
  
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8438rem;
  }
  div:nth-child(2){
    align-items: flex-end;
  }
  .paymentDetails{
    font-size: .875rem;
  }
  .paymentDetails span:nth-child(3){
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props=> props.theme["base-subtitle"]};
  }
  .paymentPrice span:nth-child(3){
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props=> props.theme["base-subtitle"]};
  }
`