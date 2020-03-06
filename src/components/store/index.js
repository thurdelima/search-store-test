/* eslint-disable no-undef */
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {  Container, ContentInput1, Time } from './posts';


const Posts = ({stores, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <>
            <Container>
                <ul>
                    {stores.map(store => (
                        <Time key={store.id}>
                            <span>{store.name}</span>
                            {/* <i class="fas fa-chevron-right"></i> */}
                           
                        </Time>

                        
                    ))}
                </ul>

            </Container>
        
        </>
    )
};

export default Posts;