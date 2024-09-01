/*import express,{ Express } from "express";
import cors from "cors";
import verifyToken from "./firebaseauth/TokenMiddleware";
import { auth } from "./firebaseauth/firebaseadmin";
import { CustomRequest } from "./firebaseauth/TokenMiddleware";
const app = express();
const PORT = process.env.PORT || 4555;

app.use(express.json());
app.use(cors());

/*app.get('/protected-route', verifyToken, (req, res) => {
  res.send(`Hello ${req.user.email}, you have access to this route!`);


app.post('/login',async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const idToken = await userCredential.user.getIdToken();

    res.json({ idToken });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(401).send('Invalid email or password');
  }
});

app.get('/protected', verifyToken, (req:CustomRequest, res) => {
  res.send(`Hello ${req.user?.name}, you are authenticated!`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/