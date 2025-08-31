import express from "express";
const userRouter = express.Router({mergeParams: true});
import user from "../models/user.js";
import wrapAsync from "../utils/wrapAsync.js";
import passport from "passport";
import { saveRedirectUrl } from "../middleware.js";

//signup route
userRouter.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

userRouter.post("/signup",wrapAsync(async(req,res)=>{
    try{
        let {username, email, password} = req.body;
        const newUser = new user({email,username});
        const registerUser = await user.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to Trivana");
            res.redirect("/listings");
        }); 
    }
    catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

//login
userRouter.get("/login",(req,res)=>{
    res.render("users/login.ejs");  
});

userRouter.post("/login",saveRedirectUrl,passport.authenticate('local',{failureRedirect: '/login', failureFlash: true}),async(req,res)=>{
    req.flash("success","Welcome to trivana, your are loged in");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});

//logout
userRouter.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","you are logged out");
        res.redirect("/listings");
    })
});

export default userRouter;