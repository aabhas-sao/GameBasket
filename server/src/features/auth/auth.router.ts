import { Request, Response, Router } from "express";
import loginController from "./controllers/login";
import signupController from "./controllers/signup";
import logoutController from './controllers/logout';
import authenticateToken from "./middleware/authenticateToken";
const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  res.status(200).send(req['user']);
})

router.post('/login', loginController);
router.post('/signup', signupController);
router.get('/logout', authenticateToken, logoutController);

export default router;