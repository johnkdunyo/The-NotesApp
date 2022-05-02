import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                                <h5 className="mb-0">Welcome back 🤩!</h5>
                                <p className="text-info">Login now, lets get going 🚀</p>
                                <form>
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="floating-input form-control" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="floating-input form-control" type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="custom-control custom-checkbox mb-3 text-left">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <Link to="/forgotpassword" className="text-primary float-right">Forgot Password 🤔?</Link>
                                    </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                    <p className="mt-3 mb-0">
                                        New User? <Link to='/register'> <b className="text-info">Sign Up</b></Link>
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

export default Login;