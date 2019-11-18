import React from 'react';

export const ImageUpload = ({ handleMediaUploadChange, handleImageUpload, imgProgress}) => {
    return (
        <>
            <progress value={imgProgress} max="100" />
            <input type="file" name="newImage" onChange={handleMediaUploadChange} />
            <button onClick={handleImageUpload}>Upload Image</button>
        </>
    )
}

export const VideoUpload = () => {

}

export const PdfUpload = () => {

}
