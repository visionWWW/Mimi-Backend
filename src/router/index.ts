import {Router} from "express";
import {ReviewController} from "../controller/ReviewController";
import {UserController} from  "../controller/UserController";

const router = Router();
router.post('/review', ReviewController.addReview);
router.post('/user', UserController.addUser);
router.post('/sign-in', UserController.findUser);
export default router;

