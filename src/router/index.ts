import {Router} from "express";
import {HashtagController} from "../controller/HashtagController";
import {ReviewController} from "../controller/ReviewController";
import {UserController} from  "../controller/UserController";

const router = Router();
router.post('/hashtag', HashtagController.addHashtag);
router.post('/review', ReviewController.addReview);
router.post('/user', UserController.addUser);
export default router;

