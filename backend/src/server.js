import express from "express";
import cors from "cors";
import "dotenv/config";

import userRouter from "./routers/userRouter.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// register routes
app.use("/users", userRouter);  

// Start server (Render uses dynamic PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
