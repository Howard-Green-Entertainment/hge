import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addClient } from '../actions/client-actions';
import ImageUpload from '../components/media/ImageUpload';
import VideoUpload from '../components/media/VideoUpload';
import PdfUpload from '../components/media/PdfUpload';
import { storage } from '../config/firebaseConfig';

export default class ClientInfoUpload extends PureComponent {
    static propTypes = {
        clients: PropTypes.array,
    }

    state = {
        clientFirstName: '',
        clientLastName: '',
        bio: '',
        newLink: '',
        newLinkTitle: '',
        newLinkDescription: '',
        externalLinks: [],
        newImage: '',
        imageUrls: [],
        newPdf: '',
        pdfUrls: [],
        newVideo: '',
        videoUrls: [],
        imgProgress: 0,
        pdfProgress: 0,
        videoProgress: 0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleMediaUploadChange = e => {
        if (e.target.files[0]) {
            this.setState({
                [e.target.name]: e.target.files[0]
            })
        }
    }

    handleLinkSubmit = () => {
        const { externalLinks, newLink, newLinkTitle, newLinkDescription } = this.state;
        const link = {
            link: newLink,
            title: newLinkTitle,
            desc: newLinkDescription
        }
        this.setState({
            externalLinks: [...externalLinks, link],
            newLink: '',
        })
    }

    handleImageUpload = () => {
        console.log('image upload triggered');
        const { newImage, imageUrls } = this.state;
        const uploadTask = storage.ref(`images/${newImage.name}`).put(newImage);
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({ imgProgress: progress });
        }, 
        (error) => {
            console.log('Error uploading file', error);
        }, 
        () => {
            storage.ref('images').child(newImage.name).getDownloadURL()
            .then(url => { 
                this.setState({ imageUrls: [...imageUrls, url] })
            })
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const client = this.state;
        console.log('client', client);
        addClient(client);
    }

    render() {
        const { imgProgress } = this.state;
        console.log('img progress form', imgProgress);
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="clientFirstName" id="clientFirstName" defaultValue="First Name" onChange={this.handleChange}></input>
                    <input type="text" name="clientLastName" id="clientLastName" defaultValue="Last Name" onChange={this.handleChange}></input>
                    <input type="textarea" name="bio" defaultValue="Bio" id="bio" onChange={this.handleChange}></input>
                    <input type="text" name="newLink" defaultValue="External Link" onChange={this.handleChange}></input>
                    <input type="text" name="newLinkTitle" defaultValue="External link title" onChange={this.handleChange}></input>
                    <input type="textarea" name="newLinkDescription" defaultValue="External link description" onChange={this.handleChange}></input>
                    <p onClick={this.handleLinkSubmit}>Add External Link</p>

                    {/* <div>
                        <progress value={this.state.imgProgress} max="100" />
                        <input name="newImage" type="file" onChange={this.handleMediaUploadChange}></input>
                        <button onClick={this.handleImageUpload}>Upload Image</button>
                    </div> */}
                    <ImageUpload handleChange={this.handleImageUpload} handleUpload={this.handleImageUpload} progress={imgProgress} />
                    <VideoUpload />
                    <PdfUpload />

                    <button>Submit</button>
                </form>
            </>
        )
    }
}
