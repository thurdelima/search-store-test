import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  margin-top: 50px;
  /* padding-bottom: 50px;*/
  margin-bottom: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;

  

  span {
    
    margin: 0 0 10px;
    font-weight: bold;
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
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    
  }

  

    p {
        width: 30px;
        color: #003383;
        margin: -10px auto;
        background-color: #f8f6fb;
        height: auto;
        
        text-align: center;
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
  border-radius: 4px;
  background: #fff;
  opacity: ${props => (props.past ? 0.6 : 1)};
  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#71591c')};
    font-size: 20px;
    font-weight: normal;
  }
  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;