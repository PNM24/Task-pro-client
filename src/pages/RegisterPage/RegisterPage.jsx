import { lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import Container from '../../components/common/Container/Container.styled';
import StyledRegisterForm from '../../components/RegisterForm/RegisterForm.styled';
import useAuth from '../../hooks/useAuth';

const StyledLoadingScreen = lazy(() =>
  import('../../components/common/LoadingScreen/LoadingScreen.styled')
);

const RegisterPage = ({ className: styles }) => {
  const { isLoading } = useAuth();

  return (
    <>
      <section className={styles}>
        <Container>
          <StyledRegisterForm />
        </Container>
      </section>

      <Suspense>
        {isLoading && createPortal(<StyledLoadingScreen />, document.body)}
      </Suspense>
    </>
  );
};

export default RegisterPage;
