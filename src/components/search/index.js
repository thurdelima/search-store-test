/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import Posts from '../Posts';
import Pagination from '../pagination';
import { Content, Container, Select, ContentInput1, ContentInput2, ContentInput3 } from './search';
import axios from 'axios';
import {Link} from 'react-router-dom';



function Search() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    //get current posts

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <Content>
            <form>
                

               <ContentInput1>
                    <label for="cars">Estado</label>
                    <Select >
                        <option disabled selected value>-- Selecione um Estado --</option>
                        <option value="volvo">test</option>
                        <option value="saab">test</option>
                        <option value="mercedes">test</option>
                        <option value="audi">test</option>
                    </Select>

                    
               </ContentInput1>

               <ContentInput2>
                    <label for="cars">Cidade</label>
                    <Select >
                        <option disabled selected value>-- Selecione um Estado --</option>
                        <option value="volvo">test</option>
                        <option value="saab">test</option>
                        <option value="mercedes">test</option>
                        <option value="audi">test</option>
                    </Select>

               </ContentInput2>

               <ContentInput3>
                <button type="submit">Buscar</button>
                   
               </ContentInput3>

               <p>ou</p>

               <ContentInput3>
                <button type="submit"> <i class="fas fa-map-marker-alt"></i> Usar localização</button>
                   
               </ContentInput3>
               
           </form>

           <Posts posts={currentPosts} loading={loading} />
           <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />

          

           

           </Content> 

           
        </>
    )
}

export default Search;