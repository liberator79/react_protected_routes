import { Outlet, Navigate } from "react-router-dom";

const Parent = () => {
    const user = null; 
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Parent