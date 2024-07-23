import { Intro } from "../../components/Intro";
import { CoffeComponent } from "./CoffeComponent";
import { HomeContainer, ListaDeProdutos, ListCoffe } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <Intro/>
            
            <ListaDeProdutos>
                <strong>Nossos Cafés</strong>

                <ListCoffe>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    <CoffeComponent/>
                    
                    
                </ListCoffe>
                
            </ListaDeProdutos>
            
            
        </HomeContainer>
    );
}