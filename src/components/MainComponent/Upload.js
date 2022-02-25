import React from 'react';
import { Button } from 'carbon-components-react';
import HistoricalGrid from '../DataTable/HistoricalGrid';

const UploadFile = ((props) => {
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
            <HistoricalGrid selectedFile={selectedFile} />
            <div className="main-button__main">
                <div className="upload">
                    <h3>Upload arquivo</h3>
                </div>
                <div className="main-button">
                    <h4>Arquivo para calibrar ou analisar modelo ?</h4>
                    <div className="main-button__checkbox">
                        <input id="analisar" type="checkbox" />
                        <label>Analise</label>
                    </div>
                    <div className="main-button__checkbox">
                        <input type="checkbox" />
                        <label>Calibrar</label>
                    </div>
                    <div className="dashed_hr">
                        <label htmlFor="arquivo">Escolher arquivo</label>
                        <input type="file" id="arquivo" className="main-button__flex" name onChange={fileSelectedHandler} />
                    </div>
                    <div>
                        <Button className="main-button__flex" onClick={fileUploadHandler}>Enviar</Button>
                    </div>
                </div>

            </div>
        </>
    )
})
export default UploadFile;
