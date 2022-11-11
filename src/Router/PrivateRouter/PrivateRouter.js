import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    // For loading
    if (loading) {
        return (
            <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
            )
    }

    // Have user or not condition
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
    
};

export default PrivateRouter;