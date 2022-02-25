import React, { useEffect } from 'react';
import './App.scss';
import HeaderComponent from './components/Header/HeaderComponent';


import UploadFile from './components/MainComponent/Upload';
const App = () => {
  const [selectedFile, setSelectedFile] = React.useState([]);
  const [isFilePicked, setIsFilePicked] = React.useState(false);


  const fileSelectedHandler = event => {
    const saveFile = event.target.files[0];
    saveFile.id = Math.random().toString();


    setSelectedFile(getNewArray => {
      return [...getNewArray, saveFile]
    });


  }
  const fileUploadHandler = () => {
    setIsFilePicked(true)


    // const fd = new FormData();
    // fd.append('file', selectedFile[0], selectedFile[0].name);
    // const sendFile = axios.post('http://localhost:4000/posts', fd)
    //   .then((res) => {
    //     console.log(res)
    //   }).catch((err) => {
    //     console.log(err)
    //   })

    console.log(selectedFile);


  }

  return (
    <>
      <header>
        <HeaderComponent />
      </header>

      <div>
        <UploadFile />
      </div>


    </>

  )
}

export default App
