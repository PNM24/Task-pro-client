import { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import Container from '../../components/common/Container/Container.styled';
import StyledLoginForm from '../../components/LoginForm/LoginForm.styled';
import useAuth from '../../hooks/useAuth';

const StyledLoadingScreen = lazy(() =>
  import('../../components/common/LoadingScreen/LoadingScreen.styled')
);

const LoginPage = ({ className: styles }) => {
  const { isLoading } = useAuth();

  return (
    <>
      <section className={styles}>
        <Container>
          <StyledLoginForm />
        </Container>
      </section>

      <Suspense>
        {isLoading && createPortal(<StyledLoadingScreen />, document.body)}
      </Suspense>
    </>
  );
};

export default LoginPage;
