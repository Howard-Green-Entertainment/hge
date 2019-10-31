import React, { PureComponent } from 'react';
import { storage } from '../../config/firebaseConfig';

export default class FileUpload extends PureComponent {

    state = {
        image: null,
        url: ''    
    }

    handleChange = e => {
        if(e.target.files[0]) {
            this.setState({ 
                image: e.target.files[0]
            })
        }
    }

    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress
        }, 
        (error) => {
            console.log('Error uploading file', error);
        }, 
        () => {
            //complete
            storage.ref('images').child(image.name).getDownloadURL()
            .then(url => { console.log('target url', url)})
        });
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange}></input>
                <button onClick={this.handleUpload}>Upload Media</button>
            </div>
        )
    }
}
