import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../redux/reducers/userSlice";

const loginFormInitialState = {
    email: '',
    password: ''
}


const Login = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate();


    // check if user is logged in already, if he is, then navigate to home
    const isLoggedIn = useSelector(state=>state.user.isLoggedIn);
    useEffect(() => {
        if(isLoggedIn){
            navigate('/home')
        }
    }, )
    
    



    const [loginForm, setLoginForm ] = useState(loginFormInitialState);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [loginFormError, setLoginFormError] = useState('')

    const handlerForm = (e)=>{
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value})
    }

    const onSubmitFormHandler = async(e) => {
        e.preventDefault();
        setIsSigningIn(true)

        // dispatch signin
        const response = await dispatch(signInUser(loginForm)).unwrap();
        console.log(response);
        // loginFormError = useSelector(state=>state.user.error);

        if(response){
            setIsSigningIn(false)
        }
        if(response.status === 200){
            navigate('/home')
            window.location.reload();
        }else {
            console.log('log in failed: ', response.message)
            setLoginFormError(response.message);
        }
    }

    

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
                                <form onSubmit={onSubmitFormHandler}>
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                className="floating-input form-control" 
                                                type="email" 
                                                placeholder="Email" 
                                                name="email"
                                                value={loginForm.email}
                                                onChange={handlerForm}
                                                autoComplete='email'
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
                                                name="password"
                                                value={loginForm.password}
                                                onChange={handlerForm}
                                                autoComplete='password'
                                                required
                                             />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3"><p className="text-warning">{loginFormError}</p></div>
                                    <div className="col-lg-6">
                                        <div className="custom-control custom-checkbox mb-3 text-left">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" required />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <Link to="/forgotpassword" className="text-primary float-right">Forgot Password 🤔?</Link>
                                    </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">{ isSigningIn ? 'Signing In 🚀...':'Sign In'}</button>
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