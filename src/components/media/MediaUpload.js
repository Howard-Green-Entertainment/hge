import React from 'react';

export function ImageUpload({ handleChange, handleUpload, progress }) {
    return (
        <div>
            <progress value={progress} max="100" />
            <input type="file" name="newImage" onChange={handleChange}></input>
            <button name="newImage" id="images" onClick={handleUpload}>Upload Image</button>

        </div>
    )
}

export function PdfUpload({ handleChange, handleUpload, progress }) {
    return (
        <div>
            <progress value={progress} max="100" />
            <input type="file" name="newPdf" onChange={handleChange}></input>
            <button onClick={handleUpload}>Upload Pdf</button>

        </div>
    )
}

export function VideoUpload({ handleChange, handleUpload, progress }) {
    return (
        <div>
            <progress value={progress} max="100" />
            <input type="file" name="newVideo" onChange={handleChange}></input>
            <button onClick={handleUpload}>Upload Video</button>

        </div>
    )
}
