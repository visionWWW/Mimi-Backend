import {Answer} from "../entity/Answer";
import {getConnection} from "typeorm";

export class AnswerController{
    static addAnswer=async (req,res)=>{
        const {id, name, grade} =req.body;
        const answer = new Answer();
        answer.id=1;
        answer.name="ssook";
        answer.grade="10000";
        const result=await getConnection().getRepository(Answer).save(answer);

        res.send(result);
    }
}