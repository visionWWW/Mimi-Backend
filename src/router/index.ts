import {Router} from "express";
import {AnswerController} from "../controller/AnswerController";
import {HashtagController} from "../controller/HashtagController";
import {ReviewController} from "../controller/ReviewController";
import {UserController} from  "../controller/UserController";

const router = Router();
router.post('/answer', AnswerController.addAnswer);
router.post('/hashtag', HashtagController.addHashtag);
router.post('/review', ReviewController.addReview);
router.post('/user', UserController.addUser);
export default router;

