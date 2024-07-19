import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import imagem from '../../assets/Imagem.png'
import { Benefits, BenefitsContainer1, BenefitsContainer2, Cart, Coffe, IntroContainer, IntroContainer2, Pack, SubTitle, Time, Title, TitleContainer } from './styles';
export function Intro(){
    return(
        <IntroContainer>
            <IntroContainer2>
                <TitleContainer>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>

                    <SubTitle> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                </TitleContainer>
               
                
                <BenefitsContainer1>
                    <BenefitsContainer2>
                        <Benefits>
                            <Cart><ShoppingCart size={16} weight='fill'/></Cart>
                            Compra simples e segura
                        </Benefits>
                        <Benefits>
                        <Time><Timer size={16} weight='fill'/></Time>
                            Endtrega rápida e rastreada
                        </Benefits>
                    </BenefitsContainer2>
                    
                    <BenefitsContainer2>
                        <Benefits>
                        <Pack><Package size={16} weight='fill'/></Pack>
                            Embalagem mantém o café intacto
                        </Benefits>
                        <Benefits>
                        <Coffe><Coffee size={16} weight='fill'/></Coffe>
                            O café chega fresquinho até você
                        </Benefits>
                    </BenefitsContainer2>
                    
                </BenefitsContainer1>
                
            </IntroContainer2>
           
            <img src={imagem} alt="imagem logo intro" />
        </IntroContainer>
    );
}