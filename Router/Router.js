const express = require("express")
const {getAllUser,getIdUser,insertUser,updateIdUser,deleteUser} = require("../Controller/User")
const {upload} = require("../Connection/upload")
const router = express.Router()


//Router Users
router.get("/GetAllUser",getAllUser)
router.get("/GetIdUser/:idUser",getIdUser)
router.post("/insertUser",upload.single("Image"),insertUser)
router.put("/updateUser/:idUser",upload.single("Image"),updateIdUser)
router.delete("/deleteUser/:idUser",deleteUser)
module.exports = router;