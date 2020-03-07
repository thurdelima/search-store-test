/* eslint-disable no-undef */
import React, { useState , Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Time, Content1 } from './store-details';
import { createBrowserHistory } from "history"
const history = createBrowserHistory({
    basename: "/"
  })
  window.redirect = history.push

class StoreDetais extends Component {
    
    state = {
        stores: {},
        shopBusinessHours: {},
        petCareClinicBusinessHours: {},
        showerBusinessHours: {}

        
    };

    componentDidMount () {
        //const { handle } = this.props.match.params
        if(this.props.location.state){
            const { store } =  this.props.location.state;

            this.setState({stores: store});
            this.setState({shopBusinessHours: store.shopBusinessHours});
            this.setState({petCareClinicBusinessHours: store.petCareClinicBusinessHours});
            this.setState({showerBusinessHours: store.showerBusinessHours});

            //console.log(store.shopBusinessHours);
        }else{
            //redirect('/');
            history.push('/');
        }

        

        

        
        
    }

    
    render() {

        const { stores, shopBusinessHours, petCareClinicBusinessHours, showerBusinessHours  } = this.state;
        return (
            <>
        <Container>
            <Content1>
                <button  type="submit"> <i class="fas fa-chevron-circle-left"></i> <Link to="/">Voltar</Link></button>
                <h1>{stores.name}</h1>
            </Content1>
        
            <br />
                 <img src={stores.image}></img> 

               
            <br />

            <ul>
            <Time >
                <p><strong>Horários Loja</strong></p>
                
                
                
                           
            </Time>
            <Time >
                
                <label> <strong>Dom e Feriados</strong>  </label>
                <span>{shopBusinessHours.sunday ?
                    shopBusinessHours.sunday :
                    '---'
                }</span>
                <span>{shopBusinessHours.holiday ?
                      shopBusinessHours.holiday :
                      '---'
                }</span>
                
               
               
                
                
              
                           
            </Time>
             <Time >
                <label> <strong>Seg à Sab</strong> </label>
                <span>{shopBusinessHours.weekdays ?
                    shopBusinessHours.weekdays :
                    '---'
                }</span>
                <span>{shopBusinessHours.saturday ?
                    shopBusinessHours.saturday :
                    '---'
                }</span>
                
               
                           
            </Time>

            <Time >
                <p><strong>Horários Banho e Tosa</strong></p>
                
                
                
                           
            </Time>
            <Time >
                
                <label> <strong>Seg à Sab</strong>  </label>
                <span>{showerBusinessHours.weekdays ?
                    showerBusinessHours.weekdays :
                    '---'
                }</span>
                <span>{showerBusinessHours.saturday ?
                    showerBusinessHours.saturday :
                    '---'
                }</span>
                
                
                
                           
            </Time>
            <Time >
                <label> <strong>Dom e Feriados</strong> </label>
                <span>{showerBusinessHours.sunday ?
                    showerBusinessHours.sunday :
                    '---'
                }</span>
                <span>{showerBusinessHours.holiday ?
                    showerBusinessHours.holiday :
                    '---'
                }</span>
                
                
                
                           
            </Time>

            <Time >
                <p><strong>Horários Veterinária</strong></p>
                
                
                
                           
            </Time>
            <Time >
                
                <label> <strong>Dom e Feriados</strong>  </label>
                <span>{petCareClinicBusinessHours.sunday ?
                        petCareClinicBusinessHours.sunday :
                        '---'
                }</span>
                <span>{petCareClinicBusinessHours.holiday ?
                        petCareClinicBusinessHours.holiday :
                        '---'
                }</span>
                
                
               
                           
            </Time>
            <Time >
                <label> <strong>Seg à Sab</strong> </label>
                <span>{petCareClinicBusinessHours.weekdays ?
                        petCareClinicBusinessHours.weekdays :
                        '---'
                }</span>
                <span>{petCareClinicBusinessHours.saturday ?
                        petCareClinicBusinessHours.saturday :
                        '---'
                }</span>
                
                
             
                           
            </Time>  
            </ul>

            <br/>
        <p>{stores.address}, {stores.number} {stores.district}</p>

        </Container>
        
        
        </>
        )
    }
}

export default StoreDetais;