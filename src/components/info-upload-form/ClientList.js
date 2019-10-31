import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllClients } from '../../actions/client-actions';

export default function ClientList() {

    let [clients, setClients] = useState(null);

    useEffect(() => {
        getAllClients()
        .then(clients => {
            setClients(clients);
        })
    }, []);

    if(!clients) return ( <p>Loading...</p>)
    
    const clientList = clients.map(client => {
        console.log('client', client);
        const clientId = `clients/${client.id}`;
            return <li key={client.id}>
                <Link to={clientId}><h3>{client.clientFirstName} {client.clientLastName}</h3></Link>
                <p>{client.bio}</p>
            </li>
        })
    
        return (
            <ul>
                {clientList}
            </ul>
        )
}
