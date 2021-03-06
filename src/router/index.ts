import {Router} from "express";
import {ReviewController} from "../controller/ReviewController";
import {UserController} from  "../controller/UserController";

const router = Router();
router.post('/review', ReviewController.addReview);
router.post('/user', UserController.addUser);
router.post('/sign-in', UserController.findUser);
router.get('/review-find/:id', ReviewController.findReview);
router.get('/user-find/:id', UserController.findID);
router.post('/login', UserController.firstUser);
export default router;

