/* eslint-disable no-undef */
import React, { useState } from 'react';
import './home.js';
import { Container, Time } from './home';
import {Link} from 'react-router-dom';
import Search from '../search/';


function Home() {
    return (
        <>
        <Container>
           
           <form>
               <input type="text" placeholder="Pesquisa a cobasi aqui"/>
               <button type="submit">Buscar</button>
           </form>
            <hr/><p>ou</p>
            <br />

            <Search />
        </Container>
        
        </>
    )
}

export default Home;