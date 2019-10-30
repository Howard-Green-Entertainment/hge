import React from 'react';
import testImg from '../logo.svg';
// import PropTypes from 'prop-types';
// import { getClientById } from '../selectors/client-selectors';
import { Link } from 'react-router-dom';
import { getClient } from '../actions/client-actions';

export default function ClientDetail({ match: { params: { clientId } }}) {

    const client = getClient(clientId);

    client ? console.log('client detail', client.bio) : null;

        return (
            <>
                <section className="client-detail">
                    <Link to="/"><button>Back Home</button></Link>
                    <img src={testImg} alt="client headshot" />
                    <section className="client-info">
                        <h1>{client.clientFirstName}</h1>
                        <p>{client.bio}</p>
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
