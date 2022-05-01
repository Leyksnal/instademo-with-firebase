import React from 'react'
import styled from 'styled-components'
import {FaRegHeart} from 'react-icons/fa'
import Post from './Post'

export default function Feed() {
  return (
    <>
    <Post/>
    <Wall>
      <Container>
        <Wrapper>
          <Topper>
            <Avatar>
              <Ava/>
            </Avatar>
            <Tag>
              <Name>Bello akeem</Name>
              <Email>Bello@gmail.com</Email>
            </Tag>
          </Topper>
          <Mg><Img src='/assets/ak.jpg'/></Mg>
          <Reaction>
            <FaRegHeart/>
            <Time>2hr ago</Time>
          </Reaction>
          <Content>For large title to collapse on scroll, the content of the screen should be wrapped in a scrollable view such as ScrollView or FlatList. If the scrollable area doesn't fill the screen, the large title won't collapse on scroll. You also need to specify content In set Adjustment Behavior ="automatic" in your ScrollView, FlatList etc.</Content>
          <Boter>
            <Button>Comment</Button>
          </Boter>
        </Wrapper>
      </Container>
    </Wall>
    </>
  )
}

const Wall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Container = styled.div`
  color: #fff;
`;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  background-color: #161A42;
  border-radius: 5px;
`;


const Topper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;


const Ava = styled.img`
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 50%;
`;


const Mg = styled.div`
  width: 100%;
  height: 280px;
`;


const Tag = styled.p`
  margin: 10px;
`;


const Avatar = styled.div`
  margin: 8px;
`;


const Name = styled.p`

`;

const Email = styled.p`
  margin-top: -10px;
`;


const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const Reaction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-bottom: -15px;
`;


const Time = styled.p`

`;


const Content = styled.p`
  margin: 10px;
`;


const Boter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;


const Button = styled.button`
  margin: 10px;
  width: 100px;
  height: 25px;
  outline: none;
  background-color: transparent;
  color: #fff;
  border: solid 3px #fff;
  border-radius: 10px;
`;