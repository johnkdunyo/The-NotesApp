import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwtDecode from 'jwt-decode';

import store from "./redux/store";
import { logOutCurrentUser, setCurrentUser } from "./redux/reducers/userSlice";

// import all pages
import ProtectedRoute from "./components/ProtectedRoutes";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Reminders from "./pages/Reminders";
import Trash from "./pages/Trash";
import NewNote from "./pages/NewNote";
import NewReminder from "./pages/NewReminder"
import ErrorPage from "./pages/ErrorPage";

const token = localStorage.getItem('user_token');

if(token){
  const decodedToken = jwtDecode(token);

  //check for expired tokens
  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    //logout user
    console.log('token expired')
    store.dispatch(logOutCurrentUser() );
  
    //redirect to login
    window.location.href = '/signin';
  } else  { 
    // token not expired and user is logged in. so we rooute to home
    // window.location.href = '/home'
    console.log('token not expired')
    store.dispatch(setCurrentUser(token))
    // window.location.href='/home'
  }
}



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />} >
            <Route exact path="/home" element={<Home /> }/>
            <Route exact path="/reminder" element={<Reminders /> } />
            <Route exact path="/trash" element={<Trash /> } />

            <Route exact path="/newnote" element={<NewNote /> } />
            <Route exact path="/newreminder" element={<NewReminder /> } />
          </Route>

          <Route path="*" element={<ErrorPage /> } />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
