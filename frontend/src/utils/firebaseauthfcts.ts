
import {auth} from "./firebaeSetup";
import {EmailAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, deleteUser, reauthenticateWithCredential, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from 'firebase/auth';

interface LoginFormValues {
  email: string;
  password: string;
}

interface UserFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

const registerUser = async ({ email, password, confirmPassword,name }: UserFormValues) => {
  if (password !== confirmPassword) {
    alert('Passwords do not match')
    throw new Error('Passwords do not match');
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // old code without the user name  return userCredential.user;
  const user = userCredential.user;

  // Update the user's profile with the name
  await updateProfile(user, {
    displayName: name
  });
  await sendEmailVerification(user);

  alert(`User registered and profile updated with name: ${name}`);
  
  return user;
  } catch (error) {
    
    alert(`Error Registering User: ${error}`)
    
  }
};

const loginUser = async ({ email, password }: LoginFormValues) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Succesfulluy login in after registrartion");
    return userCredential.user;
  } catch (error) {
   // throw new Error(error.message);
   console.log(error);
    console.log("error occurs");
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    //throw new Error(error.message);
    console.log(error);
    console.log("error occurs");
  }
};

const signinwithGoogle= async(e:React.FormEvent) =>{
  
  signInWithPopup(auth, new GoogleAuthProvider())
  .then(response => {
      console.log(response.user.uid);
      alert('aSuccessful sign up with google ')
    
  })
  .catch(error => {
      console.log(error);
      
  });
}

const deleteCurrentUser = async (email: string, password: string): Promise<void> => {
  const user = auth.currentUser;

  if (!user) {
    console.log("No user is currently signed in.");
    return;
  }

  try {
    
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(user, credential);

   
    await deleteUser(user);
    console.log("User deleted successfully.");
  } catch (error) {
    console.error("An error occurred while deleting the user:", error);
  }
};

// chnage user password
const changeUserPassword =async(oldpass:string, newpassword:string,confirmpass:string, email:string):Promise<void>=>{
  if (newpassword !== confirmpass) {
    alert('Passwords do not match')
    throw new Error('Passwords do not match');
  }

const user=auth.currentUser

if (!user) {
alert("No user is currently signed in.");
  return;
}

try {

  const credential = EmailAuthProvider.credential(user.email || '', oldpass);
  await reauthenticateWithCredential(user, credential);
  await updatePassword(user, newpassword);
  alert("Password updated successfully.");
  console.log("Password updated successfully.");
} catch (error) {
  alert("An error occurred while updating the password:");
  console.error("An error occurred while updating the password:", error);
}



}





export { registerUser, loginUser, signinwithGoogle,logoutUser,deleteCurrentUser,changeUserPassword };