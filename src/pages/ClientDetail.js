import React, { PureComponent } from 'react';
import testImg from '../logo.svg';
import PropTypes from 'prop-types';
// import { getClientById } from '../selectors/client-selectors';
import { Link } from 'react-router-dom';

export default class ClientDetail extends PureComponent {
    static propTypes = {
        client: PropTypes.object.isRequired
    }

    //get client by id from Firestore
    
    render() {
        const { name, bio } = this.props.client;
        return (
            <>
                <section className="client-detail">
                    <Link to="/"><button>Back Home</button></Link>
                    <img src={testImg} alt="client headshot" />
                    <section className="client-info">
                        <h1>{name}</h1>
                        <p>{bio}</p>
                        <ul>
                            <li>External link 1</li>
                            <li>External link 2</li>
                            <li>External link 3</li>
                        </ul>
                    </section>
                    <section className="client-videos">
                        <div>Client video goes here</div>
                    </section>
                    <section className="client-pdfs">
                        <ul>
                            <li>CV</li>
                            <li>Press Kit</li>
                        </ul>
                    </section>
                </section>
            </>
        )

    }
}
