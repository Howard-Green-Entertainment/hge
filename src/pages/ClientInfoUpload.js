import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addClient } from '../actions/client-actions';
// import { ImageUpload } from '../components/media/MediaUpload';
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
        externalLinks: {},
        externalLinkTitle: '',
        newImage: '',
        imageUrls: [],
        newPdf: '',
        pdfTitle: '',
        pdfUrls: {},
        newVideo: '',
        videoTitle: '',
        videoUrls: {},
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
        const { externalLinks, newLink, externalLinkTitle } = this.state;
        this.setState({
            externalLinks: {
                ...externalLinks,
                [externalLinkTitle]: newLink
            },
            newLink: '',
        })
    }

    handleImageUpload = () => {
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
                storage.ref('/images').child(newImage.name).getDownloadURL()
                    .then(url => {
                        this.setState({ imageUrls: [...imageUrls, url], imgProgress: 0, newImage: null })
                    })
            });
    }

    handleVideoUpload = () => {
        const { newVideo, videoUrls, videoTitle } = this.state;
        console.log('video', newVideo);
        const uploadTask = storage.ref(`videos/${newVideo.name}`).put(newVideo);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ videoProgress: progress });
            },
            (error) => {
                console.log('Error uploading file', error);
            },
            () => {
                storage.ref('videos').child(newVideo.name).getDownloadURL()
                    .then(url => {
                        this.setState({ videoUrls: {...videoUrls, [videoTitle]: url}, videoProgress: 0, newVideo: null })
                    })
            });
    }

    handlePdfUpload = () => {
        const { newPdf, pdfUrls, pdfTitle } = this.state;
        const uploadTask = storage.ref(`pdfs/${newPdf.name}`).put(newPdf);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ pdfProgress: progress });
            },
            (error) => {
                console.log('Error uploading file', error);
            },
            () => {
                storage.ref('pdfs').child(newPdf.name).getDownloadURL()
                    .then(url => {
                        this.setState({ pdfUrls: {...pdfUrls, [pdfTitle]: url}, pdfProgress: 0, newPdf: null })
                    })
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit happened', this.state);
        const client = this.state;
        addClient(client);
    }

    render() {
        const { imgProgress, videoProgress, pdfProgress } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="clientFirstName" id="clientFirstName" defaultValue="First Name" onChange={this.handleChange}></input>
                    <input type="text" name="clientLastName" id="clientLastName" defaultValue="Last Name" onChange={this.handleChange}></input>
                    <input type="textarea" name="bio" defaultValue="Bio" id="bio" onChange={this.handleChange}></input>
                    <input type="text" name="newLink" defaultValue="External Link" onChange={this.handleChange}></input>
                    <input type="text" name="externalLinkTitle" defaultValue="External link title" onChange={this.handleChange}></input>
                    {/* <input type="textarea" name="newLinkDescription" defaultValue="External link description" onChange={this.handle Change}></input> */}
                    <p onClick={this.handleLinkSubmit}>Add External Link</p>
                    <button>Submit</button>
                </form>

                <progress value={imgProgress} max="100" />
                <input type="file" name="newImage" onChange={this.handleMediaUploadChange} />
                <button onClick={this.handleImageUpload}>Upload Image</button>

                <progress value={videoProgress} max="100" />
                <input type="file" name="newVideo" onChange={this.handleMediaUploadChange} />
                <button onClick={this.handleVideoUpload}>Video Upload</button>
                <input type="text" name="videoTitle" defaultValue="Video title" onChange={this.handleChange}></input>

                <progress value={pdfProgress} max="100" />
                <input type="file" name="newPdf" onChange={this.handleMediaUploadChange} />
                <button onClick={this.handlePdfUpload}>PDF Upload</button>
                <input type="text" name="pdfTitle" defaultValue="PDF title" onChange={this.handleChange}></input>

            </>
        )
    }
}
