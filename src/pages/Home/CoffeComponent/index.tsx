import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeComponentContainer, DescriptionCoffe,QuatifyCoffes, CartButton, Sign, BuyBar, NameCoffe, TypeCoffe, Price, PriceContainer, ImageCoffe } from "./styles";
import expresso from '../../../assets/expresso.png'

export function CoffeComponent(){
    return(

        <div>
                <ImageCoffe src={expresso} alt="café" />
            <CoffeComponentContainer>
            
                
            
                <TypeCoffe>TRADICIONAL</TypeCoffe>

                <NameCoffe>Expresso Tradicional</NameCoffe>
                <DescriptionCoffe>O tradicional café feito com água quente e grãos moídos</DescriptionCoffe>

                <BuyBar>
                    <PriceContainer>
                        <Sign>R$</Sign>
                        <Price>9,90</Price>
                    </PriceContainer>
                    <span>
                        <QuatifyCoffes>
                            <Minus size={14} color="purple"/>
                            <div>1</div>
                            <Plus size={14} color="purple"/>
                        </QuatifyCoffes>

                        <CartButton>
                            <ShoppingCartSimple size={25} weight="fill" color="white"/>
                        </CartButton>
                    </span>
                
                </BuyBar>
            </CoffeComponentContainer>
        </div>
    );
}