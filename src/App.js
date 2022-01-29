import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import './App.css';

const App = () =>{
    
    const [img, setImg] = useState('');
    const [text, setText] = useState('');
    const [getImg, setGetImg] = useState();

    const imgHandle = (e) =>{
      setImg(e.target.files[0])
    }

    const inpHandle = (e) =>{
      setText(e.target.value)
    }

    const submit = async (e) =>{
      e.preventDefault();
      
      let formData = new FormData();
      formData.append('Image', img)
      formData.append('Name', text)

        let url = 'http://localhost:4000/sent';
        try{
           let a = await Axios.post(url, formData);
           console.log(formData)
        }catch(err){
          console.log(err);
        };
        setText('');
        setImg('');
    };
    const getImage = async () => {
      let url = 'http://localhost:4000/get'
      let a = await Axios.get(url);
    console.log(a?.data[0]?.avatar)

      setGetImg(a?.data[0]?.avatar)
    }
    useEffect(() => {
      getImage()
    },[])
  return(
    <div className = 'App'>
      <form >
        <input type="file" name="Image"
         value = {img.Image} onChange = {imgHandle}/>
         <br />
         <input type="text" name="Name"
         value = {text} onChange = {inpHandle}/>
        <button onClick = {submit}>SUBMIT</button>
      </form>
      <img src={`data:${getImg?.contentType};base64,${getImg?.data}`} />
    </div>
  )
};
export default App;

