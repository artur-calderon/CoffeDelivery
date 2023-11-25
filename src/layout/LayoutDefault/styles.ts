import styled from "styled-components";



export const LayoutDefaultContainer = styled.div`
  
  max-width: 90rem;
  width: 100%;
  padding: 0 10rem; 
  margin: 0 auto;

  @media screen and (max-width: 568px){
    padding: 0;
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
`
