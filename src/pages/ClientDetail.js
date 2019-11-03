import React, { useState, useEffect } from 'react';
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
