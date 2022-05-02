import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <React.Fragment>
            <div className="wrapper">
                <section className="login-content">
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center height-self-center">
                        <div className="col-md-5 col-sm-12 col-12 align-self-center">
                            <div className="sign-user_card">   
                                <div className="logo-detail">            
                                    <div className="d-flex align-items-center">
                                        <img src="assets/images/notes_icon.png" className="img-fluid rounded-normal light-logo logo" alt="logo" /> 
                                        <h4 className="logo-title ml-3">The NotesApp</h4>
                                    </div>
                                </div>      
                                <h5 className="mb-0">You wanna try 🤩!</h5>
                                <p className="text-info">Create an account, lets get going 🚀</p>
                                <form>
                                    <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                className="floating-input form-control" 
                                                type="text" 
                                                placeholder="First Name" 
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                className="floating-input form-control" 
                                                type="text" 
                                                placeholder="Last Name" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                className="floating-input form-control" 
                                                type="email" 
                                                placeholder="Email" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                className="floating-input form-control" 
                                                type="password" 
                                                placeholder="Password" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                className="floating-input form-control" 
                                                type="password" 
                                                placeholder="Confirm Password" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="custom-control custom-checkbox mb-3 text-left">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" required />
                                            <label className="custom-control-label" htmlFor="customCheck1">I agree and accept all terms and conditions</label>
                                        </div>
                                    </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create my account</button>
                                    <p className="mt-3 mb-0">
                                        Already have an acount? <Link to="/login"> <span className="text-info">Log in</span> </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default Register;