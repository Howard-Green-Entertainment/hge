import React, { PureComponent } from 'react';
import testImg from '../logo.svg';
import { connect } from 'react-redux';
import { getAllClients } from '../selectors/client-selectors';


class ClientDetail extends PureComponent {
    render() {
        return (
            <>
                <section className="client-detail">
                    <img src={testImg} alt="client headshot" />
                    <section className="client-info">
                        <h1>Client Name</h1>
                        <p>This is the client bio area lorem ipsum</p>
                        <ul>
                            <li>External link 1</li>
                            <li>External link 2</li>
                            <li>External link 3</li>
                        </ul>
                    </section>
                    <section className="client-videos">
                        <div>Client video goes here</div>
                    </section>
                    <section className="client-pdfs">
                        <ul>
                            <li>CV</li>
                            <li>Press Kit</li>
                        </ul>
                    </section>
                </section>
    
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients: getAllClients(state)
    }
}


export default connect(mapStateToProps)(ClientDetail);
