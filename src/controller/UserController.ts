import {User} from "../entity/User";
import {getConnection} from "typeorm";
import {createConnection} from "typeorm";
import {compareSync} from "bcryptjs";
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

    static findUser=async (req,res)=>{
        const {email, password} =req.body;
        const result=await getConnection().getRepository(User).findOne({where:{email}});
        if (!result) {
            return res.status(400).send({ message: "User Not found." });
        }

        if (!compareSync(password, result.password)) {
            return res.status(400).send({ message: "Invalid password" });
        }
        res.send(result);
    }
}