import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react";
import { Address,ContainerCart, ButtonConfirmarPedido,DescricaoItens ,TotalItens, Total, Container1, TitleAddress, HeaderAddress, CheckoutContainer, FormAddress, NeighborhoodInput, CityInput, StateInput, CepInput, NumberInput, StreetInput, FullAddressInput, TypePayContainer, TypePayTitle, Buttons, FormPay } from "./styles";
import { CardComponent } from "./CardComponent";



export function Checkout(){
    return(
        <CheckoutContainer>
            
            <Container1>
                <TitleAddress>Complete  seu pedido</TitleAddress>
                
                <Address>
                    
                    <div>
                        <HeaderAddress>
                            <MapPin size = {22} color="#C47F17" />
                            <div>
                                <span>Endereço de Entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                            
                        </HeaderAddress>

                        <FormAddress action="">
                            <CepInput type="text" placeholder="CEP" />
                            <StreetInput type="text" placeholder="Rua" />
                            <NumberInput type="text" placeholder="Número" />
                            <FullAddressInput type="text" placeholder="Complemento" />
                            <NeighborhoodInput type="text" placeholder="Bairro" />
                            <CityInput type="text" placeholder="Cidade" />
                            <StateInput type="text" placeholder="UF" />
                        </FormAddress>
                    </div>

                </Address>

                <TypePayContainer>
                        <TypePayTitle>
                            
                            <CurrencyDollar size={22} color="#4B2995"/>
                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </TypePayTitle>

                        <FormPay action="">
                            <Buttons>
                                <CreditCard size={16} color="#4B2995"/>
                                <p>CARTÃO DE CRÉDITO</p>
                            </Buttons>
                            
                            <Buttons>
                                <Bank size={16} color="#4B2995"/>
                                <p>CARTÃO DE DÉBITO</p>
                            </Buttons>

                            <Buttons>
                                <Money size={16} color="#4B2995"/>
                                <p>DINHEIRO</p>
                            </Buttons>
                        </FormPay>
                    </TypePayContainer>
            </Container1>
            
            <Container1>
                <TitleAddress>Cafés selecionados</TitleAddress>
                <ContainerCart>

                    <div>
                       <CardComponent/>
                       <CardComponent/>
                      
                       
                    </div>
                
                    <DescricaoItens>
                        <TotalItens>
                            <p>Total de itens</p>
                            <div>R$ 29,70</div>
                        </TotalItens>

                        <TotalItens>
                            <p>Entrega</p>
                            <div>R$ 3,00</div>
                        </TotalItens>

                        <Total>
                            <p>Total</p>
                            <div>R$ 32,70</div>
                        </Total>
                    </DescricaoItens>

                    <form action="">
                        <ButtonConfirmarPedido>CONFIRMAR PEDIDO</ButtonConfirmarPedido>
                    </form>
                </ContainerCart>

                
            </Container1>

            
            
        </CheckoutContainer>
    );
}