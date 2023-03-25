import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './Layout.module.css';
import { signOut } from '../../redux/auth/auth.thunk';
import { useAuth } from '../../hook/useAuth/useAuth';
import { Button, Stack } from '@chakra-ui/react';

export const Layout = () => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOut());

  return (
    <main className={css.container}>
      <nav className={css.nav}>
        {!isAuthorized && (
          <Stack
            spacing={4}
            direction="row"
            align="center"
            className={css.header}
          >
            <Button colorScheme="blue" onClick={() => navigate('sign-in')}>
              Sign in
            </Button>
            <Button colorScheme="blue" onClick={() => navigate('register')}>
              Register
            </Button>
          </Stack>
        )}
        {isAuthorized && (
          <Button colorScheme="blue" onClick={handleSignOut}>
            Sign out
          </Button>
        )}
      </nav>
      <div className={css.content}>
        <Outlet />
      </div>
    </main>
  );
};
