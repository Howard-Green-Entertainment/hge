import React from 'react';

export default function ClientList({clients}) {
   const clientList = clients.map(client => {
            return <li key={client.id}>
                <h3>{client.name}</h3>
                <p>{client.bio}</p>
            </li>
        })
    
        return (
            <ul>
                {clientList}
            </ul>
        )
}
