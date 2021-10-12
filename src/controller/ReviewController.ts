import {Review} from "../entity/Review";
import {User} from "../entity/User";
import {Equal, getConnection} from "typeorm";

export class ReviewController{
    static addReview=async (req,res)=>{
        const {id, grade, hashtag, explain} =req.body;
        const review = new Review();
        review.id=id;
        review.grade=grade;
        review.hashtag=hashtag;
        review.explain=explain;

        const result=await getConnection().getRepository(Review).save(review);

        res.send(result);
    }

    static findReview = async (req, res) => {
        const {id} = req.params;
        const result = await getConnection().getRepository(Review).find({ user : Equal(id) });
        res.send(result);
    }
}