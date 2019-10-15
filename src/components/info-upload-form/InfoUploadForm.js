import React from 'react';

export default function InfoUploadForm({ onSubmit }) {
    return (
        <>
            <form>
                <input type="text" name="first-name" defaultValue="First Name"></input>
                <input type="text" name="last-name" defaultValue="Last Name"></input>
                <input type="textarea" name="bio" defaultValue="Bio"></input>
                <input type="text" name="external-link" defaultValue="External Link"></input>
                <input type="text" name="external-link-title" defaultValue="External link title"></input>
                <input type="textarea" name="external-link-desc" defaultValue="External link description"></input>
                <button>Upload Images</button>
                <button>Upload Videos</button>
                <button>Upload PDFs</button>
                
                
                <button onClick={() => onSubmit()}>Submit</button>
            </form>
        </>
    )
}
