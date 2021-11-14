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
        //const result2 = await getConnection().getRepository(User).findOne({where: {id}});
        if (!result) {
            return res.status(400).send({ message: "User Not found." });
        }

        if (password!==result.password) {
            // console.log("비밀번호 실패")
            res.send("");
            return res.status(400).send({ message: "Invalid password" });
        }
        console.log(result);
        res.send(result);
        res.send();
    }

    static firstUser = async (req,res)=>{
        const {nickname} = req.body;
        const result = await getConnection()
            .getRepository(User)
            .createQueryBuilder()
            .select(['User.id','User.nickname'])
            .from(User,"user")
            .where(  "User.nickname=:nickname",{nickname})
            .getRawOne()
        console.log(result);
        res.send(result);
    }

    static findID = async (req, res) => {
        const {id} = req.body;
        const result = await getConnection().getRepository(User).findOne({where: {id}});

        if (!result) {
            return res.status(400).send({ message: "User Not found." });
        }
        console.log(result);
        res.send(result);

    }
}