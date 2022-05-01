import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {SiCloud66} from 'react-icons/si'

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Ava>
          <SiCloud66 size={'2.5rem'}/>
          <Span>66</Span>
        </Ava>
        <Press>
          <Action to={'/login'}><Button>Log In</Button></Action>
          <Action to={'/register'}><Button>Sign up</Button></Action>
        </Press>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
background-color: #4192ff;
height: 60px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: #161A42;
  color: #fff;
  font-size: 1.1rem;
  outline: none;
  border: none;
  border-radius: 8px;
  transition: all 300ms;
  transform: scale(1);

    :hover{
        cursor: pointer;
        transform: scale(0.9);
        background-color: transparent;
        border: 3px solid #fff;
    }  
`;
const Ava = styled.div`

`;
const Press = styled.div`
  width: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  font-weight: 700;
`;
const Action = styled(Link)`

`;
