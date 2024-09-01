import express,{ Express } from "express";
import cors from "cors";
import verifyToken,{CustomRequest} from "./firebaseauthentication/TokenMiddleware";
import { auth } from "./firebaseauthentication/firebaseadmin";

const app = express();
const PORT = process.env.PORT || 4555;

app.use(express.json());
app.use(cors());

/*app.get('/protected-route', verifyToken, (req, res) => {
  res.send(`Hello ${req.user.email}, you have access to this route!`);
*/

/*app.post('/login',async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const idToken = await userCredential.user.getIdToken();

    res.json({ idToken });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(401).send('Invalid email or password');
  }
});*/

/*app.get('/protected', verifyToken, (req:CustomRequest, res) => {
  res.send(`Hello ${req.user?.name}, you are authenticated!`);
});*/
app.get('/protected', verifyToken, (req:CustomRequest, res) => {
  const user = req.user;

  res.json({
    message: 'This is a protected route',
    user: user,
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));