import Listing from "../models/listing.js";
import review from "../models/review.js";
let createReview = async(req,res)=>{
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
}
export {createReview};

let deleteReview = async(req,res)=>{
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await review.findByIdAndDelete(reviewId);
    req.flash("success","review deleted");
    res.redirect(`/listings/${id}`);
}
export {deleteReview};