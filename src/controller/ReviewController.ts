import {Review} from "../entity/Review";
import {getConnection} from "typeorm";

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
}