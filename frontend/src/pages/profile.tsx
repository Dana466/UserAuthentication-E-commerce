import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebaeSetup";
import { User, onAuthStateChanged, updateProfile } from "firebase/auth";
import '../styles/styles.css';
import Header from "../components/navigationMenu";
import Footer from "../components/footer";
import { logoutUser,changeUserPassword } from "../utils/firebaseauthfcts";
const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentpass,setcurrpass]=useState<string>('')
const[newpass,setNewPass]=useState<string>('');
const[Confirmpass,setConfirmPass]=useState<string>('');
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || 'Unknown');
        setEmail(currentUser.email || '');
      } else {
        console.log("No user is signed in.");
      }
    });

    return unsubscribe;
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    if (user) {
      try {
        await updateProfile(user, { displayName });
        alert("Profile updated successfully!");
        setIsEditing(false);
await changeUserPassword(currentpass,newpass,Confirmpass,email);

      } catch (error) {
        console.error("Error updating profile: ", error);
      }
    }
  };

  return (
  
    <div className="prof_container">
      <Header pageName="profile"/>
      <h1 className="profile_heading">User Profile</h1>
      <div className="profile_nav">
<h2>Mange my Account</h2>
<li ><span>Profile</span></li>
<li onClick={logoutUser}><a href="/login">Logout</a></li>
<li><a href="/deleteaccount">Delete Account</a></li>
<h2>Payments</h2>

      </div>
<div className="edit-prof">
<h2>Edit Your Profile</h2>
      {isEditing ? (
        
        <div className="change_userinfo">

          <div>
            <label>
            Name:
              <input
                type="text"
                value={displayName} placeholder="name" onChange={(e) => setDisplayName(e.target.value)} />
            </label>
          </div>
          <div>
            <label >
              Email:
              <input
                type="email"
                value={email}  className="user_email" onChange={(e) => setEmail(e.target.value) } readOnly />
            </label>

                  <label>
                         Password Changes
                   <input type="password" className="change_password"placeholder="Current Password" value={currentpass} onChange={(e) => setcurrpass(e.target.value) }/>
               <input type="password" className="change_password"placeholder="New Password" value={newpass} onChange={(e) => setNewPass(e.target.value) } />
                         <input type="password" className="change_password"placeholder="Confirm new Password" value={Confirmpass} onChange={(e) => setConfirmPass(e.target.value) } />
                  </label>

          </div>
          <div className="edit_btn">
          <button className="save_btn" onClick={handleSave}>Save Changes</button>
          <button className="cancel_btn"  onClick={handleEditToggle}><a href="/profile">Cancel</a></button>
          </div>
       
        </div>
      ) : (
        <div className="edit_prof">
          <p className="edit_userinfo"><strong> Name:</strong> <span>{user?.displayName || 'unknown'} </span> </p>
          <p className="edit_userinfo"><strong>Email:</strong> <span>{user?.email || 'null'}</span> </p>
          <p className="edit_userinfo"><strong>Password Changes:</strong>
          <input type="password" className="edit_userpassword"placeholder="Current Password" readOnly />
          <input type="password" className="edit_userpassword"placeholder="New Password" readOnly />
          <input type="password" className="edit_userpassword"placeholder="Confirm new Password" readOnly  />
         
            </p>
            <div className="edit_btn"> <button className="save_btn" onClick={handleEditToggle}>Edit Profile</button></div>
        </div>
      )}
      
      </div>
      <div className="profile_footer">  <Footer/></div>
   
    </div>
  );
};

export default Profile;




/*import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebaeSetup";
import { User, onAuthStateChanged } from "firebase/auth";

const Profile: React.FC = () => {
  const [user, setUser] = useState<User| null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("No user is signed in.");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <h1>User Profile</h1>
      <p><strong>Display Name:</strong> {user?.displayName || 'null'}</p>
      <p><strong>Email:</strong> {user?.email || 'null'}</p>
      <button><a href="/deleteaccount">Delete Account</a></button>
    
    </div>
  );
  };
  
  export default  Profile;*/
