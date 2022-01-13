import { Router } from "express";
import loginController from "./controllers/login";
import signupController from "./controllers/signup";
const router = Router();

router.post('/login', loginController);
router.post('/signup', signupController);

export default router;