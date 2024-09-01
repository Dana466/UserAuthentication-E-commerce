import React, { useState } from 'react';
import { deleteCurrentUser } from '../utils/firebaseauthfcts';
import '../styles/styles.css';
const DeleteAccount: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the deleteCurrentUser function with the email and password
    try {
      await deleteCurrentUser(email, password);
      alert("Your account has been deleted successfully.");
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("An error occurred while deleting your account.");
    }
  };

  return (
    <div className='reset-password-container'>
      <form onSubmit={handleDeleteAccount} className="reset-password-form">
      <h2>Delete Account</h2>
       
          <label className='form_group'>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required className='form_input'/>
        </label>
        
          <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required className='form_input' />
          </label>
        
        <button type="submit">Delete Account</button>
      </form>
    </div>
  );
};

export default DeleteAccount;