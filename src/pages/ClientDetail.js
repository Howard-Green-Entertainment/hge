import React, { useState, useEffect } from 'react';
import testImg from '../logo.svg';
import { Link } from 'react-router-dom';
import { getClient } from '../actions/client-actions';

export default function ClientDetail({ match: { params: { clientId } }}) {

    let [client, setClient] = useState(null);

    useEffect(() => {
        getClient(clientId)
        .then(client => {
            setClient(client)
        })
    }, [clientId]);
    
    if(!client) return ( <p>Loading...</p>)

    const linkList = client.externalLinks.map(link => {
        <li><a target="blank" href={link}>{link}</a></li>
    })

    const imageList = client.imageUrls.map(imageUrl => {
        <li><a target="blank" href={imageUrl}><img src={imageUrl} alt="" /></a></li>
    })

    const videoList = client.videoUrls.map(videoUrl => {
        <li><a target="blank" href={videoUrl}><img src={videoUrl} alt="" /></a></li>
    })

    const pdfList = client.pdfUrls.map(pdfUrl => {
        <li><a target="blank" href={pdfUrl}><img src={pdfUrl} alt="" /></a></li>
    })

        return (
            <>
                <section className="client-detail">
                    <Link to="/"><button>Back Home</button></Link>
                    <img src={testImg} alt="client headshot" />
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
