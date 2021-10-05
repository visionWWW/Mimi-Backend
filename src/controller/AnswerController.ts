import {Answer} from "../entity/Answer";
import {getConnection} from "typeorm";

export class AnswerController{
    static addAnswer=async (req,res)=>{
        const {id, name, grade} =req.body;
        const answer = new Answer();
        answer.id=id;
        answer.name=name;
        answer.grade=grade;
        const result=await getConnection().getRepository(Answer).save(answer);

        res.send(result);
    }
}