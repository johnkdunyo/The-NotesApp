import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="container-fluid p-0">
                    <div className="hero" id='hero' >
                    {/* style={{
                        backgroundImage: "url('/assets/images/notes_banner.webp')",
                        backgroundSize:'cover',
                        backgroundPosition:'center center',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '30em',
                        
                         }} */}

                    <img src="assets/images/notes_banner.webp" className="img-fluid" alt="notes banner" />
                    <div className="hero-section">
                    <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-sm-12 mb-2">
                                <div className="landing">
                                {/* <img src="assets/images/notes_banner.webp" className="img-fluid" alt="notes banner" /> */}
                                <div className="text-center p-5">
                                    <h2 className="mt-4 mb-3 display-3 text-white">The NotesApp</h2>
                                    <h4 className="mb-4 text-white">
                                        A <span className="text-success">simple</span>, <span className="text-warning">easy-to-use</span>, <span className="text-danger">absolutely free</span>, <span className="text-purple">fast and efficient</span> note taking software.
                                    </h4>
                                    <Link to='/login'><button className="btn btn-warning">Get Started Now</button></Link>
                                </div>
                                </div>
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
                                <h4 className="card-title">Enhance your productivity</h4>
                                <p className="card-text">
                                Capture and prioritize ideas, projects and to-do lists, so nothing falls through the cracks
                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-sm-6">
                        <div className="card">
                            <img src="assets/images/notes_option_2.jpeg" className="card-img-top" alt="options" height='250rem' />
                            <div className="card-body text-center">
                                <h4 className="card-title">Turn To-DO into DONE</h4>
                                <p className="card-text">
                                    Bring your notes, tasks, and schedules together to get things done more easily.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-sm-6">
                        <div className="card">
                            <img src="assets/images/notes_option_3.jpeg" className="card-img-top" alt="options" height='250rem' />
                            <div className="card-body text-center">
                                <h4 className="card-title">Work Anywhere</h4>
                                <p className="card-text">
                                    Keep important info handy—your notes sync automatically to all your devices.
                                </p>
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

