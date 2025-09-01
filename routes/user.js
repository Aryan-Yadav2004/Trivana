import express from "express";
const userRouter = express.Router({mergeParams: true});
import user from "../models/user.js";
import wrapAsync from "../utils/wrapAsync.js";
import passport from "passport";
import { saveRedirectUrl } from "../middleware.js";
import { login, logout, renderLoginForm, renderSignUpForm, signup } from "../controllers/user.js";


userRouter.route("/signup")
.get(renderSignUpForm)
.post(wrapAsync(signup));

userRouter.route("/login")
.get(renderLoginForm)
.post(saveRedirectUrl,passport.authenticate('local',{failureRedirect: '/login', failureFlash: true}),login);

//logout
userRouter.get("/logout",logout);

export default userRouter;