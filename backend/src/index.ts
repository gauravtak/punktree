import express from "express";
import cors from "cors";
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

const port = process.env.PORT;

app.get("/health", (_, res)=>{
  res.send("Server is in good health");
})

app.listen(port, ()=>{
  console.log("You can access the base api endpoint on /api/v1")
  console.log("Server is listening on port", port)
})
