import React, { useState, useEffect } from 'react';
import { getClient } from '../actions/client-actions';
import '../index.css';

export default function ClientDetail({ match: { params: { clientId } }}) {

    let [client, setClient] = useState(null);

    useEffect(() => {
        getClient(clientId)
        .then(client => {
            setClient(client)
        })
    }, [clientId]);
    
    if(!client) return ( <p>Loading...</p>);

    const links = Object.entries(client.externalLinks);
    const linkList = links.map(link => {
            return <li key={link[0]}><a target="blank" href={link[1]}>{link[0]}</a></li>
    })

    const imageList = client.imageUrls.map(imageUrl => {
        return <li key={imageUrl}><a target="blank" href={imageUrl}><img src={imageUrl} alt="" /></a></li>
    })

    const videos = Object.entries(client.videoUrls);
    const videoList = videos.map(video => {
        return <li key={video[0]}><a target="blank" href={video[1]}>{video[0]}</a></li>
    })

    const pdfs = Object.entries(client.pdfUrls);
    const pdfList = pdfs.map(pdf => {
        return <li key={pdf[0]}><a target="blank" href={pdf[1]}>{pdf[0]}</a></li>
    })

        return (
            <>
                <h1 className="client-h1">{client.clientFirstName} {client.clientLastName}</h1>
                <section className="client-detail">
                        <section className="client-images">
                            <ul>{imageList}</ul>
                        </section>
                        <section className="client-info">
                            <p>{client.bio}</p>
                            <ul>{linkList}</ul>
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
