import React from 'react';
//import ButtonLink from './componentes/ButtonLink';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'

function Menu(){
    return(
        <nav className="Menu">
           <Link href="/">
                <img class="Logo" src={Logo} alt="techplay logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
               Novo Video
            </Button>
        </nav>
    )
}

export default Menu; 