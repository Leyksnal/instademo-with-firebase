import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Signup() {
  return (
    <Container>
      <Wrapper>
        <Gr>Sign in!</Gr>
        <Put>
          <input type="text" placeholder='email'/>
          <input type="text" placeholder='password'/>
        </Put>
        <Button>Log in</Button>
        <Info>If you don't have an existing account please <A to={'/register'}>Sing up</A> </Info>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Put = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    margin: 10px;
    padding: 10px;
    width: 300px;
    height: 20px;
    border-radius: 20px;
    outline: none;
    border: solid 3px #aaa;
    font-size: 1.1rem;
  }
`;
const Gr = styled.h2`

`;
const Info = styled.p`

`;
const A = styled(Link)`
    font-weight: 700;
    cursor: pointer;
    color: blue;
    text-decoration: none;
`;
const Button = styled.button`
  width: 130px;
  height: 40px;
  margin: 10px;
  border-radius: 20px;
  outline: none;
  border: 3px solid #aaa;
  font-size: 1.1rem;
  background-color: transparent;
`;