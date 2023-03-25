import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/home';
import { Register } from 'pages/register';
import { SignIn } from 'pages/sign-in';
import { Phonebook } from 'pages/phonebook';
import { useAuth } from '../hook/useAuth/useAuth';
import { ProtectedRoute } from './ProtectedRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth.thunk';

import { CircularProgress } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <CircularProgress isIndeterminate color="blue.300" />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/sign-in"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute component={<Phonebook />} redirectTo={'/sign-in'} />
          }
        />
      </Route>
    </Routes>
  );
};
