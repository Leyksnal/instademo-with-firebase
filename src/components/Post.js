import React, { useState } from 'react'
import styled from 'styled-components'
import {FaImages} from 'react-icons/fa'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import pix from '../assets/ak.jpg'
import { database, storage } from './Base'

export default function Post() {


  // Declaring states for all input
  const [status, setStatus] = useState("")
  const [image, setImage] = useState(pix)
  const [percentage, setPercentage] = useState("")
  const [ava, setAva] = useState("")


  // Image upload funtion
  const loadImage = async (e)=>{
    const file = e.target.files[0]
    const save = URL.createObjectURL(file)
    // send object url to the image state
    setImage(save)

    // Tigh the with and firestore storage
    const storageref = ref(storage, "data66Post/Images" + file.name)

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
    const userData = doc(collection(database, "data66Post"))
    await setDoc(userData, {status, createdAt: serverTimestamp()})
    setStatus("");
  }


  return (
    <Container>
        <Wrapper>
            <Topper>
                <Head>What's Happening?</Head>
                <Upload src={image}/>
            </Topper>
            <Content placeholder='Write your stuffs here' value={status} onChange={(e) =>{
            setStatus(e.target.value)
          }}/>
            <Action>
                <label htmlFor='statusUpload'>
                    <FaImages size={'1.3rem'}/>
                    <input id='statusUpload' type="file" onChange={loadImage}/>
                </label>
                <Button>Post</Button>
            </Action>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    color: #fff;
`;


const Upload = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;


const Head = styled.h2`
    margin-bottom: -28px;
    margin-left: 10px;
`;


const Topper = styled.div`
    width: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;


const Wrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color: #4192ff;
    border-radius: 18px;
    align-items: center;
`;


const Action = styled.div`
    margin: 10px;
    width: 470px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    label{
    border: 3px solid #fff;
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

const Button = styled.button`
    width: 130px;
    height: 40px;
    outline: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    transition: all 400ms;
    transform: scale(1);
    color: #4192ff;

    :hover{
        cursor: pointer;
        transform: scale(0.9);
    }
`;


const Content = styled.textarea`
    width: 450px;
    height: 70px;
    resize: none;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    font-size: 1.2rem;
`;


