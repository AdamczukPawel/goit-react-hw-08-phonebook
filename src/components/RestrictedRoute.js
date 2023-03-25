import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth/useAuth';

export const RestrictedRoute = ({ component, redirectTo = '/contacts' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = !isAuthorized && !isRefreshing;

  return shouldRedirect ? component : <Navigate to={redirectTo} />;
};
