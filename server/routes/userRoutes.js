const express=require("express");
const router=express.Router()
const {registerUser, authUser}=require("../controllers/userControllers")
const {eventRegister,getEvents}=require("../controllers/eventControllers")
const {registerMember,getMembers}=require("../controllers/memberControllers")

router.post("/",registerUser);
router.post("/login",authUser);
router.post("/eventRegister",eventRegister);
router.get("/allevents",getEvents);
router.post("/members",registerMember);
router.get("/allmembers",getMembers);


module.exports=router;