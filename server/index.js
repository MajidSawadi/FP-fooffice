import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
 import postRoutes from "./routes/posts.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);
const PORT = process.env.Port || 80;

mongoose
.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`server listing in ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.use("/posts", postRoutes);