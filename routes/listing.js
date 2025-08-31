import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import listingSchema from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import Listing from "../models/listing.js";
import isLoggedIn, { isOwner } from "../middleware.js";
const router = express.Router();


const validateListing = (req,res,next)=>{
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error){
        throw new ExpressError(400,result.error);
    }
    else{
        next();
    }
}
//Index Route
router.get("/",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});
//New Route
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/new.ejs");
});

//Show Route
router.get("/:id", async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews",populate: { path: "author",}}).populate("owner");
    console.log(listing);
    if(!listing){
        req.flash("error","listing you requested for does not exist!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
});

//Create Route
router.post("/",validateListing,wrapAsync(async (req,res)=>{
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; 
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
}));
//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
});
//Update Route
router.put("/:id",isLoggedIn,isOwner,validateListing,async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    console.log(req.body.listing);
    req.flash("success","Listing updated");
    res.redirect("/listings");
});

//Delete Route
router.delete("/:id", isLoggedIn,isOwner, async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
});
export default router;