import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
const Parent = ({children}) => {
    const userState = useContext(UserContext);
    return userState.user ? <>{children}</>:<Navigate to = "/login" />
};

export default Parent