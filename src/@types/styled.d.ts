import 'styled-components';
import { defaultTheme } from './../styles/themes/default';
//arquivo de definição de tipos
//arquivo especifico para styled components


import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface defaultTheme extends ThemeType{}
}