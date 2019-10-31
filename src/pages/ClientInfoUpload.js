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
        externalLinks: [],
        images: [],
        pdfs: [],
        videos: []
    }

    handleStringChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLinkChange = (e) => {
        this.setState({ 
            newLink: e.target.value
        })
    }

    handleLinkSubmit = () => {
        const { externalLinks, newLink } = this.state;
        // console.log('external links', externalLinks);
        this.setState({
            externalLinks: [...externalLinks, newLink],
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
                    <input type="text" name="clientFirstName" id="clientFirstName" defaultValue="First Name" onChange={this.handleStringChange}></input>

                    <input type="text" name="clientLastName" id="clientLastName" defaultValue="Last Name" onChange={this.handleStringChange}></input>
                    <input type="textarea" name="bio" defaultValue="Bio" id="bio" onChange={this.handleStringChange}></input>
                    <input type="text" name="externalLinks" defaultValue="External Link" onChange={this.handleLinkChange}></input>
                    <p onClick={this.handleLinkSubmit}>Add External Link</p>
                    {/* <input type="text" name="external-link-title" defaultValue="External link title"></input>
                    <input type="textarea" name="external-link-desc" defaultValue="External link description"></input> */}
                    <button>Submit</button>
                </form>
                <FileUpload />
                <VideoUpload />
                <PdfUpload />
            </>
        )
    }
}
