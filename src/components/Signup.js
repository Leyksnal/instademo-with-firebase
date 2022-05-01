import React from 'react'
import styled from 'styled-components';
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <Container>
      <Wrapper>
        <Gr>Create An Account</Gr>
        <label>
          <BsFillCameraFill size={'2rem'}/>
          <input type="file" />
        </label>
        <Put>
          <input type="text" placeholder='username'/>
          <input type="text" placeholder='email'/>
          <input type="text" placeholder='password'/>
        </Put>
        <Button>sign up</Button>
        <Info>Already have an account <A to={'/login'}>Log in</A></Info>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;


  label{
    border: 3px solid #aaa;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
      display: none;
    }

    :hover{
      cursor: pointer;
    }
  }
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

const A = styled(Link)`
    font-weight: 700;
    cursor: pointer;
    color: blue;
    text-decoration: none;
`;