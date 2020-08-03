import React from 'react';
//import ButtonLink from './componentes/ButtonLink';
import Button from '../Button'
import Logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu(){
    return(
        <nav className="Menu">
           <a href="/">
                <img class="Logo" src={Logo} alt="techplay logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
               Novo Video
            </Button>
        </nav>
    )
}

export default Menu; 