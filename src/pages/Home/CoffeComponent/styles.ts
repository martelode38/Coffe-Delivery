import styled from "styled-components";

export const CoffeComponentContainer  = styled.div`
    height: 19.375rem;
    width: 16rem;
    background: ${props => props.theme['gray-200']};
    border-radius: 6px 36px 6px 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const ImageCoffe = styled.img`
    width: 7.5rem;
    margin-top: -3.5rem;
`;

export const TypeCoffe = styled.div`
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    line-height: 130%;
    font-weight: bold;
    margin-top: 0.75rem;
`;

export const NameCoffe = styled.div`

    height: 1.625rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 20px;
    font-weight: 130%;
    margin-top: 1rem;
`;

export const DescriptionCoffe = styled.p`
    width: 13.5rem;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme['gray-600']};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 2.063rem;
`;
export const BuyBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.438rem;

    span {
        display: flex;
        gap: 0.5rem;
    }

`;
export const PriceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
`;

export const Sign = styled.p`
    font-size: 14px;
    font-family: 'Roboto';
    line-height: 130%;
    font-weight: 700;
`;

export const Price = styled.p`
    font-family: 'Baloo 2';
    font-size: 24px;
    line-height: 130%;
    font-weight: 800;
`;

export const QuatifyCoffes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background: ${props => props.theme['gray-400']};
    padding: 0.5rem;
    border-radius: 6px;
    font-family: 'Roboto';
    font-weight: 500;
`;


export const CartButton = styled.div`
    background: ${props => props.theme['purple-dark']};
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;