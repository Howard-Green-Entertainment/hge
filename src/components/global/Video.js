import React, { useState, useEffect } from 'react';
import { Player } from 'video-react';
import { getClient } from '../../actions/client-actions';

export default function Video({ match: { params: { clientName, videoTitle }}}) {
    const clientNames = clientName.split('-');
    const firstName = clientNames[0];
    const lastName = clientNames[1];

    let [client, setClient] = useState(null);
    useEffect(() => {
        getClient(firstName, lastName)
            .then(client => {setClient(client)})
    }, [firstName, lastName]);
    
    if (!client) return (<p>Loading...</p>);
    console.log('client', client);
    console.log('video title', videoTitle);
    return (
        <div className="video-container">
        <div className="video-header">
        <h2>{client.clientFirstName} {client.clientLastName}: {videoTitle}</h2>
        </div>
        <Player 
            playsInline
            src={client.videoUrls[videoTitle]}
        />
        </div>
    )
}
