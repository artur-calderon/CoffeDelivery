import styled from "styled-components";

export const SuccessContainer = styled.main`
    display: flex;
    gap: 6.375rem;
    padding-top: 5rem;
    align-items: flex-end;
    justify-content: center;

    .titleAndDetailsOrder{
        h1{
            font-family: ${props => props.theme.Baloo2};
            color: ${props => props.theme["yellow-dark"]};
            margin-bottom: .25rem;
        }
        h4{
            font-family: ${props => props.theme.Roboto};
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.25rem;
            font-weight: 400;
            margin-bottom: 2.5rem;
        }
        .detailsOrder{
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            font-family: ${props => props.theme.Roboto};
            color: ${props => props.theme["base-text"]};
            gap: 2rem;
            background:  linear-gradient(white, white) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
            
            border:1px solid transparent;
            border-radius: 6px 36px;

            p{
                display: flex;
                justify-content: flex-start;
                gap: .75rem;
                align-items: center;
            }
        }
    }

`