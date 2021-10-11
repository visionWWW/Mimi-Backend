import {User} from "../entity/User";
import {getConnection} from "typeorm";

export class UserController{
    static addUser=async (req,res)=>{
        const {id, email, password} =req.body;
        const user = new User();
        user.id=id;
        user.email=email;
        user.password=password;
        const result=await getConnection().getRepository(User).save(user);

        res.send(result);
    }
}