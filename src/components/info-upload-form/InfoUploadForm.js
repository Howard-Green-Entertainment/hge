import React from 'react';

export default function InfoUploadForm({ onSubmit }) {
    return (
        <>
            <form onClick={() => onSubmit()}>
                <input type="text" name="first name"></input>
                <button>Submit</button>
            </form>
        </>
    )
}
