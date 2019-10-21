import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <>
            <p>Landing page layout here lorem ipsum</p>
            <Link to="/upload"><button>Client upload</button></Link>
        </>
    )
}
