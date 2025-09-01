import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import {reviewSchema} from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import review from "../models/review.js";
import Listing from "../models/listing.js";
import isLoggedIn, { isReviewAuthor } from "../middleware.js";
import { createReview, deleteReview } from "../controllers/reviews.js";
const reviewsRouter = express.Router({mergeParams: true});

//Reviews
//post route
const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
}

reviewsRouter.post("/",isLoggedIn,validateReview,wrapAsync(createReview));

//delete
reviewsRouter.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(deleteReview ));

export default reviewsRouter;