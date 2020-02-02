import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <section className="footer">
                <p>&#9400; Howard Green Entertainment {year}</p>
            </section>
        </>
    )
}
