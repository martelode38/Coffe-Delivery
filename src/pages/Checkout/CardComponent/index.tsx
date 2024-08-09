import { Minus, Plus, Trash } from "@phosphor-icons/react";
import expresso from '../../../assets/expresso.png';
import { Container2, CardComponentContainer,ButtonsCard,CartComponent, CoffeImage, Buttons1, Buttons2 } from "./styles";

export function CardComponent(){
    return(
        <CardComponentContainer>
            <CartComponent>
                <CoffeImage src={expresso} alt="" />
                
                <Container2>
                    <h4>Expresso Tradicional</h4>
                    <ButtonsCard>
                        <Buttons1>
                            <Minus size={14} color="#8047F8"/>
                            <p>1</p>
                            <Plus size={14} color="#8047F8"/>
                        </Buttons1>

                        <Buttons2>
                            <Trash size={16} color="#8047F8"/>
                            <p>REMOVER</p>
                        </Buttons2>
                    </ButtonsCard>
                </Container2>
            </CartComponent>
            
            
            

            <h4>R$ 9,90</h4>
        </CardComponentContainer>
    );
}