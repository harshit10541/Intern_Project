import express from 'express'
const router = express.Router() 

router.route("/").get((req, res) => {
    res.status(200).json({ message: "auth" });
})

export default router
