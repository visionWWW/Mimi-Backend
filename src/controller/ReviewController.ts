import {Review} from "../entity/Review";
import {User} from "../entity/User";
import {Equal, getConnection} from "typeorm";

export class ReviewController{
    static addReview=async (req,res)=>{
        const {id, grade, hashtag, explain, user_id} =req.body;

        const user = await getConnection().getRepository(User).find({id: user_id});

        const review = new Review();
        review.id=id;
        review.grade=grade;
        review.hashtag=hashtag;
        review.explain=explain;
        review.user=user;
        console.log(user);

        const result=await getConnection().getRepository(Review).save(review);

        res.send(result);
    }

    static findReview = async (req, res) => {
        const {id} = req.params;
        const result = await getConnection().getRepository(Review).find({ user : Equal(id) });
        res.send(result);
    }
}