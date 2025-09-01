import Listing from "../models/listing.js";
let index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}
export {index};

let newForm = (req,res)=>{
    res.render("listings/new.ejs");
}
export {newForm};

let showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews",populate: { path: "author",}}).populate("owner");
    console.log(listing);
    if(!listing){
        req.flash("error","listing you requested for does not exist!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
};
export {showListing};

let createListing = async (req,res)=>{
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; 
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};
export {createListing}; 

let editListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}

export {editListing};

let updateList = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    console.log(req.body.listing);
    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}`);
};
export {updateList};

let deleteList = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
};

export {deleteList};