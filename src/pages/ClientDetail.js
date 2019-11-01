// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { getClient } from '../actions/client-actions';
import './ClientDetail.css';

export default function ClientDetail({ match: { params: { clientId } }}) {

    // let [client, setClient] = useState(null);

    // useEffect(() => {
    //     getClient(clientId)
    //     .then(client => {
    //         setClient(client)
    //     })
    // }, [clientId]);
    
    // if(!client) return ( <p>Loading...</p>)

    //OFFLINE CLIENT:
    
    const client = {
        id: 1234,
        clientFirstName: 'Peter',
        clientLastName: 'Parisot',
        bio: 'He da bes',
        externalLinks: [
            'www.google.com',
            'www.yahoo.com',
            'www.aol.com'
        ],
        imageUrls: [
            'www.google.com',
            'www.yahoo.com',
            'www.aol.com'
        ],
        videoUrls: [
            'www.google.com',
            'www.yahoo.com',
            'www.aol.com'
        ],
        pdfUrls: [
            'www.google.com',
            'www.yahoo.com',
            'www.aol.com'
        ]
    }


    const linkList = client.externalLinks.map(link => {
        return <li key={link}><a target="blank" href={link}>{link}</a></li>
    })

    const imageList = client.imageUrls.map(imageUrl => {
        return <li key={imageUrl}><a target="blank" href={imageUrl}><img src={imageUrl} alt="" /></a></li>
    })

    const videoList = client.videoUrls.map(videoUrl => {
        return <li key={videoUrl}><a target="blank" href={videoUrl}><img src={videoUrl} alt="" /></a></li>
    })

    const pdfList = client.pdfUrls.map(pdfUrl => {
        return <li key={pdfUrl}><a target="blank" href={pdfUrl}><img src={pdfUrl} alt="" /></a></li>
    })

        return (
            <>
                <section className="client-detail">
                    <Link to="/"><button>Back Home</button></Link>
                    <section className="client-info">
                        <h1>{client.clientFirstName} {client.clientLastName}</h1>
                        <p>{client.bio}</p>
                        <ul>{linkList}</ul>
                    </section>
                    <section className="client-media">
                        <section className="client-images">
                            <ul>{imageList}</ul>
                        </section>
                        <section className="client-videos">
                            <ul>{videoList}</ul>
                        </section>
                        <section className="client-pdfs">
                            <ul>{pdfList}</ul>
                        </section>
                    </section>
                </section>
            </>
        )
}
