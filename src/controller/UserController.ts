import {User} from "../entity/User";
import {getConnection} from "typeorm";

export class ReviewController{
    static addUser=async (req,res)=>{
        const {id, nickname, password} =req.body;
        const user = new User();
        user.id=id;
        user.nickname=nickname;
        user.password=password;
        const result=await getConnection().getRepository(User).save(user);

        res.send(result);
    }
}