import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Img from "gatsby-image"
import dropIcon from "../icon/drop-icon.png"
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
// disableBodyScroll();

function Gateway() {
    

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            // clearAllBodyScrollLocks();
            document.getElementById('gateway').style.visibility = 'hidden'
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })


    return (
        <>
            
            <div id="gateway">
            <div id= "dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={dropIcon} id="drop-icon"/>
            </div>
            </div>
            
        </>
    )
}


export default Gateway