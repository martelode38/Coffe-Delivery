import { Bank, CreditCard, CurrencyDollar, MapPinSimple, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { Address } from "./styles";

export function Checkout(){
    return(
        <div>
            
            
            <Address>
                <strong>Complete  seu pedido</strong>
                <div>
                    <div>
                        <MapPinSimple size = {32} />
                        <span>Endereço de Entrega</span>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>

                    <form action="">
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
                    </form>
                </div>
                <div>
                    <div>
                        <CurrencyDollar/>
                        <span>Pagamento</span>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            
                    </div>

                    <form action="">
                        <button>
                            <CreditCard size={32}/>
                            <p>CARTÃO DE CRÉDITO</p>
                        </button>
                        
                        <button>
                            <Bank size={32}/>
                            <p>CARTÃO DE DÉBITO</p>
                        </button>

                        <button>
                            <Money size={32}/>
                            <p>DINHEIRO</p>
                        </button>
                    </form>
                </div>
            </Address>

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
        </div>
    );
}