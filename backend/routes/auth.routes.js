import express, { Router } from 'express'

const router = Router();
router.route("/").get((req, res) => {
    res.status(200).json({ message: "auth" });
});

export { router }
