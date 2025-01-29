import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './EmailVerification.styled.js';

const EmailVerification = () => {
  const { verificationToken } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`/account/verify/${verificationToken}`);
        toast.success(response.data.message || 'Email verified successfully!');
        setStatus('success');

        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } catch (error) {
        toast.error(error.response?.data?.message || 'Verification failed');
        setStatus('error');
      }
    };

    if (verificationToken) {
      verifyEmail();
    }
  }, [verificationToken, navigate]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Email Verification</h2>
      {status === 'loading' && <p style={styles.text}>Verifying your email...</p>}
      {status === 'success' && <p style={styles.text}>Email verified successfully! Redirecting...</p>}
      {status === 'error' && (
        <>
          <p style={styles.text}>Email verification failed. Please try again.</p>
          <a href="/resend-verification" style={styles.link}>Resend verification email</a>
        </>
      )}
    </div>
  );
};

export default EmailVerification;
