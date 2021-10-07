import {Router} from "express";
import {AnswerController} from "../controller/AnswerController";
import {HashtagController} from "../controller/HashtagController";
import {ReviewController} from "../controller/ReviewController";

const router = Router();
router.post('/answer', AnswerController.addAnswer);
router.post('/hashtag', HashtagController.addHashtag);
router.post('/review', ReviewController.addReview);

export default router;

