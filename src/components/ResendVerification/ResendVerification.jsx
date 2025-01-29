import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './ResendVerification.styled.js';

const ResendVerification = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResend = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/account/verify', { email });
      toast.success(response.data.message || 'Verification email sent!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to resend email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Resend Verification Email</h2>
      <p style={styles.text}>Enter your email to receive a new verification link.</p>
      <form onSubmit={handleResend}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Sending...' : 'Resend Email'}
        </button>
      </form>
      <a href="/login" style={styles.link}>Back to Login</a>
    </div>
  );
};

export default ResendVerification;
