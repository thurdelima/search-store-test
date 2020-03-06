import React from 'react';
import {  Paginate } from './pagination';

const Pagination = ({storesPerPage, totalStores, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalStores / storesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        
           

            <Paginate>
                {pageNumbers.map(number => (
                    <a onClick={(e) => {
                        e.preventDefault();
                        paginate(number);
                    }} href="#">
                    {number}
                </a>
                ))}
            </Paginate>


    
    )
}


export default Pagination