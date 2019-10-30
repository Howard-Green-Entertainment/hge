import React, { PureComponent } from 'react';
// import InfoUploadForm from '../components/info-upload-form/InfoUploadForm';
// import ClientList from '../components/info-upload-form/ClientList';
// import { getAllClients } from '../selectors/client-selectors';
import PropTypes from 'prop-types';
import { addClient } from '../actions/client-actions';
export default class ClientInfoUpload extends PureComponent {
    static propTypes = {
        clients: PropTypes.array,
    }

    state = {
        name: '',
        bio: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const client = this.state;
        console.log('client', client);
        addClient(client);
        //adds new client to firestore
    }

    render() {
        // const { clients } = this.props;
        return (
            <>
                {/* <InfoUploadForm onChange={this.handleChange} onSubmit={this.handleSubmit} /> */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="first-name" id="name" defaultValue="First Name" onChange={this.handleChange}></input>
                    <input type="text" name="last-name" defaultValue="Last Name"></input>
                    <input type="textarea" name="bio" defaultValue="Bio" id="bio" onChange={this.handleChange}></input>
                    <input type="text" name="external-link" defaultValue="External Link"></input>
                    <input type="text" name="external-link-title" defaultValue="External link title"></input>
                    <input type="textarea" name="external-link-desc" defaultValue="External link description"></input>
                    {/* <button>Upload Images</button>
                    <button>Upload Videos</button>
                    <button>Upload PDFs</button> */}
                    
                    
                    <button>Submit</button>
            </form>
                {/* <ClientList clients={clients} /> */}
            </>
        )
    }
}
