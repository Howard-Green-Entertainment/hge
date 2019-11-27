import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addClient } from '../actions/client-actions';
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
        const client = this.state;
        addClient(client);
    }

    render() {
        const { imgProgress, videoProgress, pdfProgress } = this.state;
        return (
            <section className="form-wrapper">
                <h2>Basic Information:</h2>
                <form>
                    <label >
                        First Name: 
                        <input type="text"
                        name="clientFirstName"
                        id="clientFirstName"  
                        onChange={this.handleChange}
                        autoComplete="off"></input>
                    </label>
                    <label>
                        Last Name:
                        <input type="text"
                        name="clientLastName"
                        id="clientLastName"  
                        onChange={this.handleChange}
                        autoComplete="off"></input>
                    </label>
                    <label>
                        Bio:
                        <textarea name="bio"
                        id="bio" 
                        onChange={this.handleChange}
                        autoComplete="off"></textarea>
                    </label>
                    <label>
                        External Link Address:
                        <input type="text"
                        name="newLink"
                        onChange={this.handleChange}
                        autoComplete="off"></input>
                    </label>
                    <label>
                        External Link Title:
                        <input type="text"
                        name="externalLinkTitle"
                        onChange={this.handleChange}
                        autoComplete="off"></input>
                    </label>
                    <p className="add-link-button" onClick={this.handleLinkSubmit}>Add External Link</p>
                </form>
                <section className="media-upload">
                    <h2>Upload Media:</h2>
                    <label className="image-upload">
                        Image Upload:
                        <progress value={imgProgress} max="100" />
                        <input type="file" name="newImage" onChange={this.handleMediaUploadChange} />
                    </label>
                    <button onClick={this.handleImageUpload}>Upload Image</button>

                    <label className="video-upload">
                        Video Upload:
                        <progress value={videoProgress} max="100" />
                        <input type="file" name="newVideo" onChange={this.handleMediaUploadChange} />
                    </label>
                        <input 
                        type="text"
                        name="videoTitle"
                        defaultValue="Video title"
                        onChange={this.handleChange}
                        autoComplete="off"></input>
                        <button onClick={this.handleVideoUpload}>Video Upload</button>

                    <label className="pdf-upload">
                        PDF Upload:
                        <progress value={pdfProgress} max="100" />
                        <input type="file" name="newPdf" onChange={this.handleMediaUploadChange} />
                    </label>
                        <input
                        type="text" 
                        name="pdfTitle" 
                        defaultValue="PDF title" 
                        onChange={this.handleChange}
                        autoComplete="off"></input>
                        <button onClick={this.handlePdfUpload}>PDF Upload</button>
                </section>
                <button onClick={this.handleSubmit}>Submit Client To Database</button>
            </section>
        )
    }
}
