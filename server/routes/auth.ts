const express = require("express")
import { authenticateUser } from "../controllers/auth";
const router = express.Router();

router.post('/authenticate', authenticateUser);

export default router;