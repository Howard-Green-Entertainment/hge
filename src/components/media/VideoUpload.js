import React, { PureComponent } from 'react';
import { storage } from '../../config/firebaseConfig';

export default class VideoUpload extends PureComponent {

    state = {
        video: null,
        url: '',
        progress: 0    
    }

    handleChange = e => {
        if(e.target.files[0]) {
            this.setState({ 
                video: e.target.files[0]
            })
        }
    }

    handleUpload = () => {
        const { video } = this.state;
        const uploadTask = storage.ref(`videos/${video.name}`).put(video);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({ progress: progress });
        }, 
        (error) => {
            console.log('Error uploading file', error);
        }, 
        () => {
            storage.ref('videos').child(video.name).getDownloadURL()
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
                <button onClick={this.handleUpload}>Upload Video</button>
            </div>
        )
    }
}
