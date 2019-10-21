import React from 'react';
import { Link } from 'react-router-dom';

export default function ClientList({clients}) {
    const clientList = clients.map(client => {
        const clientId = `clients/${client.id}`
            return <li key={client.id}>
                <Link to={clientId}><h3>{client.name}</h3></Link>
                <p>{client.bio}</p>
            </li>
        })
    
        return (
            <ul>
                {clientList}
            </ul>
        )
}
