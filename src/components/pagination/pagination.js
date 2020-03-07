import styled from 'styled-components';

export const Paginate = styled.div`
    display: inline-block;
    padding: 30px;

    a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
        border: 1px solid #ddd;
    }

    a.active {
        background-color: #4CAF50;
        color: white;
        border: 1px solid #4CAF50;
    }

    a:hover:not(.active) {background-color: #ddd;}
`;