import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Hero>
          <img src="/assets/hm.jpg" alt="" />
        </Hero>
        <Msg>Welcome to CodeLab</Msg>
        <Sub>Please the sign in button at the top left coner to gain access to your dashboard</Sub>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;
const Msg = styled.h2`
  margin-top: 30px;
  font-size: 3rem;
`;
const Hero = styled.div`
  width: 100%;
  height: 300px;

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Sub = styled.p`
  margin-top: -10px;
`;