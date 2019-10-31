import React from 'react';

export default function ImageUpload({ handleChange, handleUpload, progress }) {
    console.log('progress', progress);
    return (
        <div>
            <progress value={progress} max="100" />
            <input type="file" onChange={() => handleChange()}></input>
            <button onClick={() => handleUpload()}>Upload Image</button>

        </div>
    )
}
