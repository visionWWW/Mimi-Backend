import {Router} from "express";
import {AnswerController} from "../controller/AnswerController";

const router = Router();

router.post('/answer', AnswerController.addAnswer);

export default router;

