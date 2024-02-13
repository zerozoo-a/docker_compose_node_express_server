import { Router } from "express";
import { index } from "../controllers/homeController.js";

const router = Router();

router.get("/aa", function a(req, res) {
  res.json({ a: 1, b: 2, c: 3 });
});
router.get("/", index);
router.get("/mock", (req, res) => {});

export default router;
