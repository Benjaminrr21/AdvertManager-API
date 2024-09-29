const express = require("express")
const {getAll, getById, add, search} = require("../controllers/oglas.controller.js")

const router = express.Router()

router.get("/",getAll)
router.post("/",add)
router.get("/search",search)

router.get("/:id",getById)


module.exports = router