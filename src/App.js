import logo from './logo.svg';
import './App.css';
import Ccomponent from './Ccomponent';
import styled from 'styled-components';
import Title from './Title';
import Flex from './Flex';
import Console from './Console';
import Button from './Button';

const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding:2rem;
background:black;
color:white;
`

const App = () => {
  return (
    <AppWrapper> 

    <Flex justify="center">   <Title color={"green"}>Test application Console 2022</Title>
    </Flex>
    <Flex direction="column" margin={"30px 0"}>
    <Console ></Console>
    <Button color={"green"}outlined align="flex-end">Send</Button>
    </Flex>
     
   </AppWrapper> 
  );
}

export default App;
