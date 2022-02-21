import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
      let accessToken = sessionStorage.getItem('access token');
      return accessToken? children : <Navigate  to={'/form/login'}/>
};

export default PrivateRoute;