import styled from 'styled-components';

export const ContentInput1 = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0;

    label {
        margin: 0px 0px 0px 10px;
    }
`;


export const Container = styled.div`
max-width: 600px;

/* padding-bottom: 50px;*/
margin-bottom: 0px;
height: auto;
display: flex;
flex-direction: column;
margin-left: 10px;
  margin-right: 10px;

display: flex;
flex-direction: column;
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
grid-template-columns: repeat(1, 1fr);
grid-gap: 15px;

}

`;


export const Time = styled.li`
  padding: 20px;
  display: flex;
    flex-direction: row;
  border-radius: 4px;
  background: #fff;

  a {
    -webkit-text-decoration: none;
    text-decoration: none;
    color: black;
  }
  
`;