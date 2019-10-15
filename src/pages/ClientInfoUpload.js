import React, { PureComponent } from 'react';
import InfoUploadForm from '../components/info-upload-form/InfoUploadForm';

export default class ClientInfoUpload extends PureComponent {
    handleSubmit = () => {
        alert('Form submitted');
    }
    render() {
        return (
            <InfoUploadForm onSubmit={this.handleSubmit} />
        )
    }
}
