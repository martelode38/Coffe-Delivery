

import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 10rem;

    div{
        display: flex;
        align-items: center;
        gap: 1rem;
        

        span{
            color: ${props => props.theme['yellow-dark']};
            background-color: ${props => props.theme['yellow-light']};
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    nav{
        color: ${props => props.theme['purple']};
        display: flex;
        background-color: ${props => props.theme['purple-light']};
        padding: 0.5rem;
        border-radius: 8px;
        gap: 0.3rem;
        div{
            color: ${props => props.theme['purple-dark']};
        }
    }
`;