import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 라우터 설정
import indexRouter from "./routes/index.js";
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// EJS 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRouter);

export { app };
