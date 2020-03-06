/* eslint-disable no-undef */
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {  Container, Time } from './posts';


const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <>
            <Container>
                <ul>
                    {posts.map(post => (
                        <Time key={post.id}>
                            {post.title}
                        </Time>

                        
                    ))}
                </ul>

            </Container>
        
        </>
    )
};

export default Posts;