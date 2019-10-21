import React, { PureComponent } from 'react';
import InfoUploadForm from '../components/info-upload-form/InfoUploadForm';
import ClientList from '../components/info-upload-form/ClientList';
import { connect } from 'react-redux';
import { getAllClients } from '../selectors/client-selectors';
import PropTypes from 'prop-types';
class ClientInfoUpload extends PureComponent {
    static propTypes = {
        clients: PropTypes.array
    }

    

    
    handleSubmit = () => {
        alert('Form submitted');
    }
    render() {
        const { clients } = this.props;
        console.log('clients', clients);
        return (
            <>
                <InfoUploadForm onSubmit={this.handleSubmit} />
                <ClientList clients={clients} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    clients: getAllClients(state)
})

export default connect(mapStateToProps)(ClientInfoUpload);
