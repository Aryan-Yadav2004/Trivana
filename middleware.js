import Listing from "./models/listing.js";
import review from "./models/review.js";
 
let isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        console.log(req.originalUrl);
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
};
export default isLoggedIn;

let saveRedirectUrl = (req,res,next)=>{
   if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
   } 
   next();
}
export {saveRedirectUrl};

let isOwner = async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
export {isOwner};

let isReviewAuthor = async (req,res,next)=>{
    let {id,reviewId} = req.params;
    let rev = await review.findById(reviewId);
    if(!rev.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to delete this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
export {isReviewAuthor};