import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import {reviewSchema} from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import review from "../models/review.js";
import Listing from "../models/listing.js";
import isLoggedIn, { isReviewAuthor } from "../middleware.js";
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
reviewsRouter.post("/",isLoggedIn,validateReview,wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id); 
    let newReview = new review(req.body.review);
    console.log(newReview);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    console.log("new review saved");
    req.flash("success","New review created");
    res.redirect(`/listings/${listing._id}`);
}));

//delete
reviewsRouter.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(async(req,res)=>{
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await review.findByIdAndDelete(reviewId);
    req.flash("success","review deleted");
    res.redirect(`/listings/${id}`);
}));

export default reviewsRouter;