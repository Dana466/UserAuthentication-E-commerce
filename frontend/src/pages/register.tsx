import React, { useEffect, useState } from 'react';
import { registerUser} from '../utils/firebaseauthfcts';
import '../styles/styles.css';
import Footer from '../components/footer';
import Header from '../components/navigationMenu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../storeredux/userslice';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebaeSetup';
import { GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from "react-icons/fc";

const Register = () => {
  // added new for user name
  const [name,setName] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();
  const dispatch =useDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user);
        dispatch(setUser({ id: user.uid, email: user.email, displayName: user.displayName }));
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });
  
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  const handleRegister = async (e: React.FormEvent) => {


    try {

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
      const User = await registerUser({ email, password, confirmPassword,name });
      if(!User){ throw new Error('error occurs during registration')}
      dispatch(setUser({id:User.uid, email: User.email}));
      console.log("Successful login message");
      //alert("Register sussesfully");
      alert(`Registered successfully. Welcome, ${User.displayName}!`);
    navigate('/login');
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration");
    }
  };

const signinWithGoogle = async (e: React.FormEvent) => {
  e.preventDefault();

  const user = auth.currentUser; // Check the current user state
  

  if (user) {
    
    alert(`You are already signed in as ${user.email}`);
    navigate('/store'); 
    return;
  }

  try {
    const response = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(response.user.uid);
    alert('Successful sign up with Google');
    navigate('/store');
  } catch (error: any) {
    console.error(error);

    alert('Error signing in: ' + error.message);
  }
};

  

  return (
<div>
  <Header/>
    <section className="section">
    <div className="auth_container">
      <div className="auth_img">
        <img src={`${process.env.PUBLIC_URL}/auth-image.png`} alt="" className="auth_image" />
      </div>
      <div className="auth_content">
        <form action="" className="auth_form">
          <h2 className="form_title">Create your account</h2>
          <p className="auth_p">Enter your details below</p>
          <div className="form_group">
            <input type="text" placeholder="Name" value={name} className="form_input"  onChange={(e) =>setName(e.target.value)}/>
          </div>
          <div className="form_group">
            <input type="email" value={email} placeholder="Email" className="form_input" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form_group form_pass">
            <input
              type="password" value={password}
              placeholder="Password"
              className="form_input" onChange={(e) => setPassword(e.target.value)}   />
          </div>
          
          <div className="form_group form_pass">
            <input
              type="password" value={confirmPassword}
              placeholder=" Confirm Password"
              className="form_input" onChange={(e) => setConfirmPassword(e.target.value)}   />
          </div>


          <div className="form_group">
            <button className="form_btn" onClick={handleRegister}>
              <a href="/login" className="form_link">Register</a>
            </button>
          </div>
          <div className='form_group'>
          <button className="google-sign-up-button" onClick={signinWithGoogle}>
      <FcGoogle className="google-icon" />
      <span className="sign-up-text">Sign up with Google</span>
    </button>
    </div>
         
          <div className="form_group">
            <span>
              Already have an account?
              <a href="/login" className="form_auth_link">Login</a></span>
          </div>
        </form>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  
  );
};

export default Register;