import {User} from "../entity/User";
import {getConnection} from "typeorm";
import {compareSync} from "bcryptjs";
export class UserController{
    static addUser=async (req,res)=>{
        const {id, nickname, password} =req.body;
        const user = new User();
        user.id=id;
        user.nickname=nickname;
        user.password=password;
        const result=await getConnection().getRepository(User).save(user);
        console.log(result);
        res.send(result);
    }

    static findUser = async (req, res) => {
        const {nickname, password} = req.body;

        const result = await getConnection().getRepository(User).findOne({where: {nickname}});

        if (!result) {
            alert("실패")
            return res.status(400).send({ message: "User Not found." });
        }

        // console.log(password);
        // console.log(result.password);
        //
        // console.log(typeof(password));
        // console.log(typeof(result.password));

        if (password!==result.password) {
            // console.log("비밀번호 실패")
            res.send("");
            return res.status(400).send({ message: "Invalid password" });
        }

        console.log(result);

        res.send(result);
    }
}