import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import {reviewSchema} from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import review from "../models/review.js";
import Listing from "../models/listing.js";
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
reviewsRouter.post("/",validateReview,wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id); 
    let newReview = new review(req.body.review);
    console.log(newReview);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    console.log("new review saved");
    res.redirect(`/listings/${listing._id}`);
}));

//delete
reviewsRouter.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

export default reviewsRouter;