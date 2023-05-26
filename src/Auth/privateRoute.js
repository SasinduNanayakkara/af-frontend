import { Navigate } from "react-router-dom";

const User = {
    authenticated: localStorage.getItem("user") && localStorage.getItem("token"),
    role: localStorage.getItem("role")
};

const AdminPrivateRoute = ({ children }) => {

  const isLoggedIn = User.authenticated && User.role && User.role == 'admin';

  return isLoggedIn ? children : <Navigate to="/signin" />;
};

const ConsultantPrivateRoute = ({ children }) => {

    const isLoggedIn = User.authenticated && User.role && User.role == 'consultant';

  return isLoggedIn ? children : <Navigate to="/signin" />;
};

const ClientPrivateRoute = ({ children }) => {

    const isLoggedIn = User.authenticated && User.role && User.role == 'client';

  return isLoggedIn ? children : <Navigate to="/signin" />;
};

export {
    AdminPrivateRoute,
    ConsultantPrivateRoute,
    ClientPrivateRoute
};
