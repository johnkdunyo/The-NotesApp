import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = ({
    redirectPath = '/login',
    children,
  }) => {

    const isLoggedIn = useSelector(state=>state.user.isLoggedIn);
    console.log('isLoggedIn: ', isLoggedIn)

    if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };

  export default ProtectedRoute;