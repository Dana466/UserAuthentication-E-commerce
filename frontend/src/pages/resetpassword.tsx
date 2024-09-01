import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../utils/firebaeSetup'; 
import '../styles/styles.css';
import resetpass from '../assests/resetpass.png';
const PasswordReset: React.FC = () => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            try {
                await sendPasswordResetEmail(auth, email);
                alert('Email sent! Check your inbox for password reset instructions.');
            } catch (error) {
                console.error('Error sending password reset email:', error);
                alert('Failed to send password reset email. Please try again.');
            }
        } else {
            alert('Email is required to reset the password.');
        }
    };

    return (
        <div className="reset-password-container">
            
            <form onSubmit={handlePasswordReset} className="reset-password-form">
                <img src={resetpass} alt="reset password" className='passimg' />
            <h2>Reset Password</h2>
                <label className='form_group'>
                    Email:
                    <input className="form_input"
                        type="email" placeholder='type your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default PasswordReset;
