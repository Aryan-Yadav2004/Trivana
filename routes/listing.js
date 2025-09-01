import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import listingSchema from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import Listing from "../models/listing.js";
import isLoggedIn, { isOwner,validateListing } from "../middleware.js";
import { createListing, deleteList, editListing, index, newForm, showListing, updateList } from "../controllers/listings.js";
import multer from "multer";
import { storage } from "../cloudConfig.js";
const upload = multer({storage: storage});
const router = express.Router();

router.route("/")
.get(wrapAsync(index))
// .post(isLoggedIn,validateListing,wrapAsync(createListing));
.post(upload.single('listing[image]'),(req,res)=>{
    console.log(req.file);
    res.send(req.file);
});
//New Route
router.get("/new",isLoggedIn,newForm);


router.route("/:id")
.get(showListing)
.put(isLoggedIn,isOwner,validateListing,updateList)
.delete(isLoggedIn,isOwner, deleteList);


 
//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,editListing);

export default router;