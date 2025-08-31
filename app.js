import express from "express";
const app = express();
import mongoose from "mongoose";
import Listing from "./models/listing.js";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import wrapAsync from "./utils/wrapAsync.js";
import ExpressError from "./utils/ExpressError.js";
import listingSchema,{reviewSchema} from "./schema.js";
import review from "./models/review.js";
import router from "./routes/listing.js";
import reviewsRouter from "./routes/review.js";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import LocalStrategy from "passport-local";
import user from "./models/user.js";
import userRouter from "./routes/user.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.get("/",(req,res) => {
    res.send("Hi, I am root");
});
const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser()); 

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error"); 
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser", async (req,res)=>{
//     let fakeUser = new user({
//         email: "student@gmail.com",
//         username: "delta-student",
//     });
//     let registereduser = await user.register(fakeUser,"helloworld");
//     res.send(registereduser);
// });

app.use("/listings",router);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);



app.use((err,req,res,next)=>{
    const {status, message} = err;
    console.log(message);
    res.render("error.ejs",{message});
});
app.use((req,res)=>{
    let message = "page not found";
    res.render("error.ejs",{message});
});
app.listen(8080,() => {
    console.log("server is listening to port 8080");
});
