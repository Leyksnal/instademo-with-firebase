import React, { useState } from 'react'
import styled from 'styled-components';
import {BsFillCameraFill} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { collection, doc, setDoc } from 'firebase/firestore'
import { auth, database, storage } from './Base'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import pic from '../assets/ak.jpg'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
  // Navigate to the a page after a user sign up successfully
  const navigate = useNavigate()


  // Declaring states for all input
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState(pic)
  const [percentage, setPercentage] = useState("")
  const [ava, setAva] = useState("")


  // Image upload funtion
  const loadImage = async (e)=>{
    const file = e.target.files[0]
    const save = URL.createObjectURL(file)
    // send object url to the image state
    setImage(save)

    // Tigh the with and firestore storage
    const storageref = ref(storage, "data66/Images" + file.name)

    const uploadTask = uploadBytesResumable(storageref, file)
    uploadTask.on( "state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      setPercentage(progress)
    }, (error) =>{
      console.log(error.message)
    }, () =>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
        setAva(downloadURL)
      })
    })
  }

  // Adding to the document
  const regUser = async ()=>{
    const user = await createUserWithEmailAndPassword(auth, email, password)
    if(user){
      const userData = doc(collection(database, "data66"), user.user.uid)
      await setDoc(userData, {username, email, password, ava})
    }
    setAva("");
    setPassword("");
    setUsername("");
    setEmail("");
    navigate("/");
  }


  return (
    <Container>
      <Wrapper>
        <Gr>Create An Account</Gr>
        <Avatar src={image}></Avatar>
        <label htmlFor='pictureToUpload'>
          <BsFillCameraFill size={'1.3rem'}/>
          <input id="pictureToUpload" type="file" onChange={loadImage}/>
        </label>
        <Put>
          <input type="text" placeholder='username' value={username} onChange={(e) =>{
            setUsername(e.target.value)
          }} />
          <input type="text" placeholder='email' value={email} onChange={(e) =>{
            setEmail(e.target.value)
          }} />
          <input type="text" placeholder='password' value={password} onChange={(e) =>{
            setPassword(e.target.value)
          }} />
        </Put>
        <Button onClick={regUser}>sign up</Button>
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
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 10px;

    input{
      display: none;
    }

    :hover{
      cursor: pointer;
    }
  }
`;
const Put = styled.div`
  margin-top: 10px;
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
  transform: scale(1);
  transition: all 400ms;


  :hover{
    cursor: pointer;
    transform: scale(0.9)
  }
`;

const A = styled(Link)`
    font-weight: 700;
    cursor: pointer;
    color: blue;
    text-decoration: none;
`;

const Avatar = styled.img`
    border: 3px solid #aaa;
    width: 90px;
    height: 90px;
    border-radius: 50%;
`;