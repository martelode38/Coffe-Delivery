import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { Address, Container1, TitleAddress, HeaderAddress, CheckoutContainer, FormAddress, NeighborhoodInput, CityInput, StateInput, CepInput, NumberInput, StreetInput, FullAddressInput, TypePayContainer, TypePayTitle, Buttons, FormPay } from "./styles";

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
            

            <div>
                <strong>Cafés selecionados</strong>

                <div>
                    <img src="" alt="" />
                    <span>Expresso Tradicional</span>
                    <div>
                        <div>
                            <Minus/>
                            <div>1</div>
                            <Plus/>
                        </div>
                        <div>
                            <Trash/>
                            <div>REMOVER</div>
                        </div>
                    </div>
                </div>

                <span>R$ 9,90</span>
            </div>

            <div>
                <strong>Cafés selecionados</strong>

                <div>
                    <img src="" alt="" />
                    <span>Expresso Tradicional</span>
                    <div>
                        <div>
                            <Minus/>
                            <div>1</div>
                            <Plus/>
                        </div>
                        <div>
                            <Trash/>
                            <div>REMOVER</div>
                        </div>
                    </div>
                </div>

                <span>R$ 9,90</span>
            </div>

            <div>
                <div>
                    <p>total de itens</p>
                    <div>R$ 29,70</div>
                </div>

                <div>
                    <p>tEntrega</p>
                    <div>R$ 3,00</div>
                </div>

                <div>
                    <p>Total</p>
                    <div>R$ 32,70</div>
                </div>
            </div>
        </CheckoutContainer>
    );
}