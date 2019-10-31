import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addClient } from '../actions/client-actions';
import FileUpload from '../components/media/ImageUpload';
import VideoUpload from '../components/media/VideoUpload';
import PdfUpload from '../components/media/PdfUpload';
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
        images: [],
        pdfs: [],
        videos: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLinkChange = (e) => {
        this.setState({ 
            newLink: e.target.value
        })
    } 

    handleLinkSubmit = () => {
        const { externalLinks, newLink, newLinkTitle, newLinkDescription } = this.state;
        const link = {
            link: newLink,
            title: newLinkTitle,
            desc: newLinkDescription
        }
        // console.log('external links', externalLinks);
        this.setState({
            externalLinks: [...externalLinks, link],
            newLink: '',
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const client = this.state;
        console.log('client', client);
        addClient(client);
    }

    render() {
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
<br/>

                    <button>Submit</button>
                </form>
                <FileUpload />
                <VideoUpload />
                <PdfUpload />
            </>
        )
    }
}
