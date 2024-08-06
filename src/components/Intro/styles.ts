import styled from "styled-components";

export const IntroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5.75rem 0  5.75rem;
`;

export const Hero = styled.img`

`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;

export const IntroContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`;

export const Title = styled.div`
    color: ${props => props.theme['gray-900']};
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    width: 36.75rem;
    line-height: 130%;
`;

export const SubTitle = styled.div`
    color: ${props => props.theme['gray-900']};
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
    width: 36.75rem;
`;
export const BenefitsContainer1 = styled.div`
    display: flex;
    gap: 2.5rem;
`;
export const BenefitsContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;


export const Benefits = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Roboto';
    font-size: 14px;

`;

export const iconsBenefits = styled.div`
    border-radius: 9999px;
    color: ${props => props.theme.white};
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Cart = styled(iconsBenefits)`
    background: ${props => props.theme['yellow-dark']};
`;
export const Time = styled(iconsBenefits)`
    background: ${props => props.theme['yellow']};
`;
export const Pack = styled(iconsBenefits)`
    background: ${props => props.theme['gray-700']};
`;
export const Coffe = styled(iconsBenefits)`
    background: ${props => props.theme['purple']};
`;

