import styled from 'styled-components';

export const Content1 = styled.div`
  display: flex;

  h1 {
    text-align: center;
    color: #003383;
    flex-grow: 2;
  }

  a{
    
    text-decoration: none;
    color: white;
  }

  button {
            
    height: 44px;
    background: #003383;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    transition: background 0.2s;
    &:hover {
      
    }a{
    
      text-decoration: none;
      color: white;
    }
    
  }
`;


export const Container = styled.div`
max-width: 600px;
margin: 50px auto;
margin-top: 50px;
/* padding-bottom: 50px;*/
margin-bottom: 10px;
height: 100%;
display: flex;
flex-direction: column;

h1{
  text-align: center;
}




header {
  display: flex;
  align-self: center;
  align-items: center;
  button {
    border: 0;
    background: none;
  }
  strong {
    color: #fff;
    font-size: 24px;
    margin: 0 15px;
  }
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  
}



  p {
      width: auto;
      color: #003383;     
      background-color: #f8f6fb;
      height: auto;     
      text-align: left;
      padding: 20px;
  }

  form {
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      margin: 10px;
      input {
        background: #fff;
        border: 0;
        flex-grow: 6;
        border-radius: 4px 0px 0px 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;
        &::placeholder {
          color: #003383;
        }
      }

      
      
      hr {
        border: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        margin: 10px 0 20px;
      }

      

      button {
        
        height: 44px;
        background: #003383;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 0px 4px 4px 0px;
        font-size: 16px;
        flex-grow: 1;
        transition: background 0.2s;
        &:hover {
          
        }
      }

     
`;

export const Time = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  justify-content: space-around;
  
  label {
    margin-bottom: 5px;
    text-align: center;
  }

  span {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    color: #003383;
    margin: 5px;
  }

  p {
    width: auto;
    margin-top: 20px;
    text-align: center;
  }
  
  
`;



