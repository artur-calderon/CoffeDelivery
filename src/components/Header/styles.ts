import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  font-family: ${props => props.theme.Roboto};
  font-weight: 400;
  font-size: .875rem;
  img{
    width: 5rem;
    height: 2.5rem;
  }
 
`


export const IconsWrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: .75rem;

div{
  background-color: ${props => props.theme["purple-light"]};
      padding: .5rem;
      border-radius: 6px;
      
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .25rem;  
      cursor: pointer;
}

`
export const CartIcon = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme["yellow-light"]};
  padding: .5rem;
  border-radius: 6px;

  cursor: pointer;

  .quantityBall{
    position: absolute;
    right: -8.35px;
    top: -8px;


    width: 1.25rem;
    height: 1.25rem;
    background-color: ${props => props.theme["yellow-dark"]};

    border-radius: 100%;

    font-family: ${props => props.theme.Roboto};
    color: #fff;
    font-size:.75rem;
  }
`
