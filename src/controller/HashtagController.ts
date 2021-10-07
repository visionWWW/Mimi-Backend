import {Hashtag} from "../entity/Hashtag";
import {getConnection} from "typeorm";

export class HashtagController{
    static addHashtag=async (req,res)=>{
        const {id, name} =req.body;
        const hashtag = new Hashtag();
        hashtag.id=id;
        hashtag.name=name;
        const result=await getConnection().getRepository(Hashtag).save(hashtag);

        res.send(result);
    }
}