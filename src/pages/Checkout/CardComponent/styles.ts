import styled from "styled-components";

export const CardComponentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    border-bottom: 1px solid ${props => props.theme['gray-400']};
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
    font-family: "Roboto";
    font-size: 16px;
    
`;

export const CoffeImage = styled.img`
    width: 4rem;
    height: 4rem;
`;

export const ButtonsCard = styled.div`
    display: flex;
    gap: 1rem;
`;

export const CartComponent = styled.div`
    display: flex;
    gap: 1.5rem;
    h4 {
        font-family: "Roboto";
        font-size: 16px;
        line-height: 130%;
        font-weight: 500;
    }
`;

export const Buttons1 = styled.div`
    background: ${props => props.theme['gray-400']};
    padding: 0.406rem 0.5rem;
    border-radius: 8px;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background: ${props => props.theme['gray-500']};
    }
   
`;

export const Buttons2 = styled.div`

    background: ${props => props.theme['gray-400']};
    padding: 0.406rem 0.5rem;
    border-radius: 8px;
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme['gray-500']};
    }
    p{
        font-family: "Roboto";
        font-size: 12px;
        line-height: 160%;
        
    }

   
`;

export const Container2 = styled.div`
    display: grid;
    gap: 0.5rem;
`;


