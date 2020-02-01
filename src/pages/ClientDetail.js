import React, { useState, useEffect } from 'react';
import { getClient } from '../actions/client-actions';
import '../index.css';
import { Link } from 'react-router-dom';
import routes from '../routes/routes';
import Loader from '../components/global/Loader';
// import { MdPictureAsPdf, MdMovie, MdLink } from 'react-icons/md';
import { IoMdVideocam, IoMdDocument, IoIosLink } from 'react-icons/io';

export default function ClientDetail({ match: { params: { clientName } } }) {
    const clientNames = clientName.split('-');
    const firstName = clientNames[0];
    const lastName = clientNames[1];

    let [client, setClient] = useState(null);

    useEffect(() => {
        getClient(firstName, lastName)
            .then(client => {
                setClient(client)
            })
    }, [firstName, lastName]);

    if (!client) return (<Loader />);

    const links = Object.entries(client.externalLinks);
    const linkList = links.map(link => {
        return <li key={link[0]}><a target="blank" href={link[1]}>{link[0]}</a></li>
    })

    const featureImage = client.imageUrls.shift();

    const imageList = client.imageUrls.map(imageUrl => {
        return <li key={imageUrl}><a target="blank" href={imageUrl}><img src={imageUrl} alt={clientName} /></a></li>
    })

    const videos = Object.entries(client.videoUrls);
    const videoLinkList = videos.map(video => {
        return <li key={video[0]}>
            <Link to={routes.VIDEO.linkPath(clientName, video[0])}>{video[0]}</Link>
            </li>
    })

    const pdfs = Object.entries(client.pdfUrls);
    const pdfList = pdfs.map(pdf => {
        return <li key={pdf[0]}><a target="blank" href={pdf[1]}>{pdf[0]}</a></li>
    })

    return (
        <section className="client-wrapper">
            <h1 className="client-h1">{client.clientFirstName} {client.clientLastName}</h1>
            <section className="client-detail">
                <section className="client-images">
                <a target="blank" href={featureImage}><img src={featureImage} alt={clientName} /></a>
                </section>
                <section className="client-info">
                    <section className="client-info-row pdfs">
                        <section className="section-icon">
                            <IoMdDocument size="100" color="#1bcb2e" />
                        </section>
                        <section className="section-content">
                            <h3>Documents</h3>
                            <ul>{pdfList}</ul>
                        </section>
                    </section>
                    <section className="client-info-row videos">
                        <section className="section-icon">
                            <IoMdVideocam size="100" color="#1bcb2e" />
                        </section>
                        <section className="section-content">
                            <h3>Videos</h3>
                            <ul>{videoLinkList}</ul>
                        </section>
                    </section>
                    <section className="client-info-row links">
                        <section className="section-icon">
                            <IoIosLink size="100" color="#1bcb2e" />
                        </section>
                        <section className="section-content">
                            <h3>External Links</h3>
                            <ul>{linkList}</ul>
                        </section>
                    </section>
                </section>
            </section>
            <section className="client-images-thumbs">
                <ul>{imageList}</ul>   
            </section>
        </section>
    )
}
