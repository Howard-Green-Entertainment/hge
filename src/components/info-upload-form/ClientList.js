import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllClients } from '../../actions/client-actions';
import routes from '../../routes/routes'

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
        const clientName = `${client.clientFirstName.trim()}-${client.clientLastName.trim()}`;
        console.log('client name', clientName);
            return <li key={client.id}>
                <Link to={routes.CLIENT_DETAIL.linkPath(clientName)}><h3>{client.clientFirstName} {client.clientLastName}</h3></Link>
            </li>
        })
    
        return (
            <div className="all-clients">
                <h2>Clients:</h2>
                <ul className="client-list">
                    {clientList}
                </ul>
            </div>
        )
}
