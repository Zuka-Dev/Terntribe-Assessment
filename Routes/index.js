import express from "express";
import {
  createCause,
  deleteCause,
  getCause,
  getCauses,
  updateCause,
} from "../Controllers/cause.js";
import addContribution from "../Controllers/contrib.controller.js";

const router = express.Router();

router.post("/causes", createCause);
router.get("/causes", getCauses);
router.get("/causes/:id", getCause);
router.put("/causes/:id", updateCause);
router.delete("/causes/:id", deleteCause);
router.post("/causes/:id/contribute", addContribution);

export default router;
