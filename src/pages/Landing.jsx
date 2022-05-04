import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="landing">
                    <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-sm-12 mb-2">
                                <div className="landing">
                                <img src="assets/images/notes_banner.webp" className="img-fluid" alt="notes banner" />
                                <div className="text-center p-5">
                                    <h3 className="mt-4 mb-3">The NotesApp</h3>
                                    <h4 className="mb-4">The first, truly notes taking app for all your devices; from desktop to mobile! <br/>
                                        It's a <span className="text-warning">simple</span>, <span className="text-warning">easy-to-use</span>, <span className="text-warning">absolutely free</span>, <span className="text-warning">fast and efficient</span> note taking software.
                                    </h4>
                                    <Link to='/login'><button className="btn btn-primary">Get Started Now</button></Link>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-6">
                        <div className="card">
                            <img src="assets/images/notes_option_1.png" className="card-img-top" alt="options" height='250rem' />
                            <div className="card-body text-center">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                    With The NotesApp, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note
                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-sm-6">
                        <div className="card">
                            <img src="assets/images/notes_option_2.jpeg" className="card-img-top" alt="options" height='250rem' />
                            <div className="card-body text-center">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-sm-6">
                        <div className="card">
                            <img src="assets/images/notes_option_3.jpeg" className="card-img-top" alt="options" height='250rem' />
                            <div className="card-body text-center">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Landing;

