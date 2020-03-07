/* eslint-disable no-undef */
import React, { useState , Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Map, Content1} from './map';
import { createBrowserHistory } from "history"
const history = createBrowserHistory({
    basename: "/"
  })
  window.redirect = history.push

class Maps extends Component {
    
    state = {
        

        
    };

    componentDidMount () {
        const { latitude, longitude } = this.props.location.state;
        
        console.log(latitude);
        console.log(longitude);

        this.initMap(latitude, longitude);
    }

    initMap(lat, long){
            
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

    
    render() {

        
        return (
            <>
        <Container>
                
               

                <Content1><button  type="submit"> <i class="fas fa-chevron-circle-left"></i> <Link to="/">Voltar</Link></button>
                    <h1>Sua localização</h1>
                               
                </Content1>
                <br />
            
            <Map id="map"></Map>
        </Container>
        
        
        </>
        )
    }
}

export default Maps;