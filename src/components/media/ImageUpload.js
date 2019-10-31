import React, { PureComponent } from 'react';
import { storage } from '../../config/firebaseConfig';

export default class ImageUpload extends PureComponent {

    state = {
        image: null,
        url: '',
        progress: 0    
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
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({ progress: progress });
        }, 
        (error) => {
            console.log('Error uploading file', error);
        }, 
        () => {
            storage.ref('images').child(image.name).getDownloadURL()
            .then(url => { 
                this.setState({ url: url })
            })
        });
    }

    render() {
        return (
            <div>
                <progress value={this.state.progress} max="100" />
                <input type="file" onChange={this.handleChange}></input>
                <button onClick={this.handleUpload}>Upload Media</button>
                
            </div>
        )
    }
}
