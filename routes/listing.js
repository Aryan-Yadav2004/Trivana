import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import listingSchema from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import Listing from "../models/listing.js";
import isLoggedIn, { isOwner,validateListing } from "../middleware.js";
import { createListing, deleteList, editListing, index, newForm, searchListing, showListing, updateList } from "../controllers/listings.js";
import multer from "multer";
import { storage } from "../cloudConfig.js";
const router = express.Router();

const upload = multer({ storage });
router.route("/")
.get(wrapAsync(index))
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(createListing));
//New Route
router.get("/new",isLoggedIn,newForm);
router.get("/search",searchListing);


router.route("/:id")
.get(showListing)
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,updateList)
.delete(isLoggedIn,isOwner, deleteList);


 
//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,editListing);

export default router;