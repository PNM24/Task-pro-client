import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UseAnimations from 'react-useanimations';
import visibility from 'react-useanimations/lib/visibility';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { GreenButton } from '../common/FormButton/FormButton.styled';
import StyledAuthNavigation from '../AuthNavigation/AuthNavigation.styled';
import 'animate.css';

const RegisterForm = ({ className: styles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [confimPasswordIsVisible, setConfimPasswordIsVisible] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters long')
      .required('Required *'),
    email: Yup.string()
      .matches(emailRegex, { message: 'Invalid email address' })
      .required('Required *'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(passwordRegex, {
        message: 'Must include an uppercase, a lowercase and a digit',
      })
      .required('Required *'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Password doesn't match")
      .required('Required *'),
  });

  const handleSubmit = (values, formikBag) => {
    const { name, email, password } = values;
    const { setSubmitting, setFieldError, resetForm } = formikBag;

    setSubmitting(true);

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(value => {
        toast.success(value.message);
        resetForm();
        navigate('/dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(error => {
        const errorNotification =
          error?.response?.data?.message || 'Internal server error';
        toast.error(errorNotification);

        if (error?.response?.status === 409) {
          setFieldError('email', 'This email is already used');
          document.querySelector('form').scrollIntoView();
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div
      className={`${styles} animate__animated animate__zoomIn  animate__slow"`}
    >
      <StyledAuthNavigation />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, values, touched }) => (
          <Form autoComplete="off">
            <div
              className={`field ${
                touched.name && errors.name ? 'onError' : ''
              }`}
            >
              <Field
                autoComplete="off"
                id="nameInput"
                type="text"
                name="name"
                placeholder="Please, enter your name !"
              />
              <div className="error">
                <ErrorMessage name="name" component="span" />
              </div>
            </div>

            <div
              className={`field ${
                touched.email && errors.email ? 'onError' : ''
              }`}
            >
              <Field
                autoComplete="off"
                id="emailInput"
                type="email"
                name="email"
                placeholder="Please, enter your email !"
              />
              <div className="error">
                <ErrorMessage name="email" component="span" />
              </div>
            </div>

            <div
              className={`field ${
                touched.password && errors.password ? 'onError' : ''
              }`}
            >
              <Field
                autoComplete="off"
                id="passwordInput"
                type={passwordIsVisible ? 'text' : 'password'}
                name="password"
                placeholder="Please, enter your password !"
              />
              <div className="error">
                <ErrorMessage name="password" component="span" />
              </div>
              {values.password && (
                <UseAnimations
                  animation={visibility}
                  onClick={() => setPasswordIsVisible(prev => !prev)}
                  size={30}
                  className="showPassword"
                  strokeColor="rgba(255, 255, 255, 1)"
                  speed={2}
                />
              )}
            </div>

            <div
              className={`field ${
                touched.confirmPassword &&
                (errors.confirmPassword || errors.password)
                  ? 'onError'
                  : ''
              }`}
            >
              <Field
                autoComplete="off"
                id="confirmPasswordInput"
                type={confimPasswordIsVisible ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Please, confirm your password !"
              />
              <div className="error">
                <ErrorMessage name="confirmPassword" component="span" />
              </div>
              {values.confirmPassword && (
                <UseAnimations
                  animation={visibility}
                  onClick={() => setConfimPasswordIsVisible(prev => !prev)}
                  size={30}
                  className="showPassword"
                  strokeColor="rgba(255, 255, 255, 1)"
                  speed={2}
                />
              )}
            </div>

            <GreenButton
              type={'submit'}
              text={isSubmitting ? 'Loading...' : 'Register Now'}
              isDisabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
