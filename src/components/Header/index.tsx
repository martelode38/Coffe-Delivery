import logo from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { HeaderContainer } from './styles';


export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logotipo" />
            <div>
                <nav>
                    <MapPin size={22} weight='fill'/>
                    <div>Fortaleza, CE</div>
                </nav>
                
                <span>
                  <ShoppingCart size={22} weight='fill'/>
                </span>
            </div>
            
            
        </HeaderContainer>
    );
}