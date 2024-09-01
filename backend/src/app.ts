import express,{ Express } from "express";
import cors from "cors";
import verifyToken,{CustomRequest} from "./firebaseauthentication/TokenMiddleware";
import { auth } from "./firebaseauthentication/firebaseadmin";

const app = express();
const PORT = process.env.PORT || 4555;

app.use(express.json());
app.use(cors());

app.get('/protected', verifyToken, (req:CustomRequest, res) => {
  const user = req.user;

  res.json({
    message: 'This is a protected route',
    user: user,
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
