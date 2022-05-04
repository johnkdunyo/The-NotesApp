import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,  } from "react-router-dom";
import { signUpUSer } from "../redux/reducers/userSlice";

const signupFormInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // check if user is logged in already, if he is, then navigate to home
    const isLoggedIn = useSelector(state=>state.user.isLoggedIn);
    console.log('isLoggefin fron signup: ', isLoggedIn)
    useEffect(() => {
      if(isLoggedIn){
          navigate('/home')
      }
    }, [isLoggedIn, navigate])

    const signupFormError = useSelector(state=>state.user.error)

    const [signupForm, setSignupForm] = useState(signupFormInitialState);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);

    const formHandler = (e) => {
        setSignupForm({...signupForm, [e.target.name]:e.target.value});
    }

    const onSubmitFormHandler = async(e)=>{
        e.preventDefault();
        setIsSigningUp(true)
        // console.log(signupForm)
        const response =await dispatch(signUpUSer(signupForm)).unwrap();
        console.log(response)
        response && setIsSigningUp(false)
        if(response.status === 200){
            console.log('gfdcfhcfgdx')
            navigate('/home')

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
                                <h5 className="mb-0">You wanna try 🤩!</h5>
                                <p className="text-info">Create an account, lets get going 🚀</p>
                                <form onSubmit={onSubmitFormHandler}>
                                    <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                className="floating-input form-control" 
                                                type="text" 
                                                placeholder="First Name" 
                                                name='firstName'
                                                value={signupForm.firstName}
                                                onChange={formHandler}
                                                autoComplete='given-name'
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
                                                name='lastName'
                                                value={signupForm.lastName}
                                                onChange={formHandler}
                                                autoComplete='family-name'
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
                                                name='email'
                                                value={signupForm.email}
                                                onChange={formHandler}
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
                                                value={signupForm.password}
                                                onChange={formHandler}
                                                autoComplete='new-password'
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
                                                name="ConfirmPassword"
                                                value={confirmPassword}
                                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                                autoComplete='new-password'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12"><p className="text-red">{ signupForm.password !== confirmPassword && "Confirm Password does not match"}</p></div>
                                    <div className="col-lg-12"><p className="text-red">{ signupFormError}</p></div>                    

                                    <div className="col-lg-12">
                                        <div className="custom-control custom-checkbox mb-3 text-left">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" required />
                                            <label className="custom-control-label" htmlFor="customCheck1">I agree and accept all terms and conditions</label>
                                        </div>
                                    </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">{isSigningUp ? 'Creating your account...':'Create my account'}</button>
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