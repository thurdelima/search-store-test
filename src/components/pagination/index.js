import React from 'react';
import {  Paginate } from './pagination';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        
           

            <Paginate>
                {pageNumbers.map(number => (
                    <a onClick={() => paginate(number)} href="#">
                    {number}
                </a>
                ))}
            </Paginate>


    
    )
}


export default Pagination