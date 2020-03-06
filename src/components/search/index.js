/* eslint-disable react/style-prop-object */
/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback } from 'react';
import Stores from '../store';
import Pagination from '../pagination';
import Modal from 'react-modal';
import { Content, Container, Select, ContentInput1, ContentInput2, ContentInput3, Map } from './search';
import axios from 'axios';
import {Link} from 'react-router-dom';



function Search() {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [storesPerPage, setStoresPerPage] = useState(10);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [loadMap, setLoadMap ] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://lojas-api.cobasi.com.br/api/lojas');
            setStores(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    console.log(stores);

    //get current posts

    const indexOfLastStore = currentPage * storesPerPage;
    const indexOfFirstStore = indexOfLastStore - storesPerPage;
    const currentStores = stores.slice(indexOfFirstStore, indexOfLastStore);

    

    
  

    const openModal = (e) => {
        e.preventDefault();
                  
        setModalIsOpen(true)
        
    }

   

    const initMap = (lat, long) => {
            
        let options = {
            zoom: 15,
            center:{lat:lat,lng:long}
        }

        let map = new google.maps.Map(document.getElementById('map'), options);
        // console.log(options);
        let marker = new google.maps.Marker({
            position:{lat: lat,lng: long},
            map:map
          });

        

        
    }

    useEffect( () => {
       
        
            if('geolocation' in navigator) {
                const watcher =   navigator.geolocation.watchPosition(function (position) {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                     console.log(latitude);
                     console.log(longitude);
                     
                   
                    //initMap(latitude, longitude);
                }, function(error){
                    console.log(error);
                })
               
            }else{
                alert('Não foi possivel trazer os dados, tente novamente mais tarde.')
            }
       
   
}, [latitude, longitude]);



    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <Content>
            <form>
                

               <ContentInput1>
                    <label for="cars">Estado</label>
                    <Select >
                        <option disabled selected value>-- Estado --</option> 
                        <option value="test">test</option>
                        <option value="test">test</option>
                        <option value="test">test</option>
                        <option value="test">test</option>
                    </Select>

                    
               </ContentInput1>

               <ContentInput2>
                    <label for="cars">Cidade</label>
                    <Select >
                        <option disabled selected value>-- Cidade --</option> 
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
                <button onClick={openModal} type="submit"> <i class="fas fa-map-marker-alt"></i> {loadMap?'loading': 'Usar localização'}</button>
                <Link to="/store">Localizar</Link>
               </ContentInput3>
               
           </form>

           <Stores stores={currentStores} loading={loading} />
           <Pagination storesPerPage={storesPerPage} totalStores={stores.length} paginate={paginate} />

          
            
            
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false) }>
                <h2>Modal title</h2>
                <Map id="map" />
                <button onClick={() => setModalIsOpen(false)} >Close</button>
            </Modal>
           

           </Content> 


           
        </>
    )
}

export default Search;