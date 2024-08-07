import styled from "styled-components";

export const Container1 = styled.div`
    display: grid;
    gap: 0.75rem;
`;
export const CheckoutContainer = styled.div`
    margin: 5rem 10rem;
    display: flex;
    gap: 2rem;
`;

export const TitleAddress =  styled.strong`
    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight:800;
    line-height: 130%;
    margin-bottom: 3px;
`;

export const Address = styled.div`
    background: ${props => props.theme['gray-100']};
    border-radius: 6px;
    width: 40rem;
    height: 23.25rem;
    padding: 2.5rem;

`;

export const HeaderAddress = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    div {
        display: flex;
        flex-direction: column;
        
    }

    span {
        font-family: "Roboto";
        font-size: 18px;
        line-height: 130%;
        font-weight: 400;
        color: ${props => props.theme['gray-800']};
    }

    p {
        font-family: "roboto";
        font-size: 14px;
        line-height: 130%;
        font-weight: 400;
        color: ${props => props.theme['gray-700']};
    }
`;

export const FormAddress = styled.form`
  display: grid;
  grid-template-areas:
    "cep cep cep"
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
`;

export const Inputs = styled.input`
    background: ${props => props.theme['gray-200']};
    border: 1px solid ${props => props.theme['gray-400']};
    color: ${props => props.theme['gray-800']};
    font-family: "Roboto";
    font-size: 14px;
    line-height: 130%;
    height: 2.625rem;
    border-radius: 6px;
    padding: 0.5rem;
`;

// Definição das áreas para cada input
export const CepInput = styled(Inputs)`
    width: 12.5rem;
    grid-area: cep;
`;

export const StreetInput = styled(Inputs)`
    grid-area: street;
`;

export const NumberInput = styled(Inputs)`
    width: 12.5rem;
    grid-area: number;
`;

export const FullAddressInput = styled(Inputs)`
    grid-area: fullAddress;
`;

export const NeighborhoodInput = styled(Inputs)`
    width: 12.5rem;
    grid-area: neighborhood;
`;

export const CityInput = styled(Inputs)`
    width: 17.25rem;
    grid-area: city;
`;

export const StateInput = styled(Inputs)`
    width: 3.75rem;
    grid-area: state;
`;

export const TypePayContainer = styled.div`
    background: ${props => props.theme['gray-100']};
    border-radius: 6px;
    width: 40rem;
    height: 12.938rem;
    padding: 2.5rem;
`;

export const TypePayTitle = styled.div`
    
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    div {
        display: flex;
        flex-direction: column;
        
    }

    span {
        font-family: "Roboto";
        font-size: 18px;
        line-height: 130%;
        font-weight: 400;
        color: ${props => props.theme['gray-800']};
    }

    p {
        font-family: "roboto";
        font-size: 14px;
        line-height: 130%;
        font-weight: 400;
        color: ${props => props.theme['gray-700']};
    }
`;

export const FormPay = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Buttons = styled.button`
    width: 11.167rem;
    height: 3.188rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['gray-400']};
    color: ${props => props.theme['gray-700']};
    padding: 1rem;
    font-family: "Roboto";
    font-size: 12px;
    line-height: 160%;
    border: 1px solid ${props => props.theme['gray-400']};
    border-radius: 6px;
    gap: 0.5rem;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme['gray-500']};
    }
    
`;

