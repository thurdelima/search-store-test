/* eslint-disable no-undef */
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {  Container, ContentInput1, Time } from './store';
import createHistory from 'history/createBrowserHistory';
import props from 'prop-types';


import { createBrowserHistory } from "history"
const history = createBrowserHistory({
  basename: "/"
})
window.redirect = history.push




function Stores  ({stores, loading})  {
    if(loading) {
        return <h2>Loading...</h2>;
    }

    const getStore =(data,e) =>  {
        //const history = createHistory()
       e.preventDefault();
    
        
        history.push('/store')
    
        //console.log(data);
    
        redirect("/store");
    
        
    }

    
    
    return (
        <>
            <Container>
                <ul>
                    {stores.map(store => (
                        <Time key={store.id} value={store} onClick={(e) => getStore(store, e)}>
                           
                            
                            <Link to={{pathname:'/store', state:{store}}}> <span>{store.name}</span></Link>
                            {/* <i class="fas fa-chevron-right"></i> */}
                           
                        </Time>

                        
                    ))}
                </ul>

            </Container>
        
        </>
    )
};

export default Stores;