import styled from "styled-components";

export const HomeContainer =  styled.div`
    margin: 2rem 10rem;
    color: ${props => props.theme['gray-800']};
    
    strong {
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
    }
`;

export const ListaDeProdutos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.375rem;

`;

export const ListCoffe = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
    
`;