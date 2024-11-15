import express, { Request, Response } from "express";
import cors from "cors";

const app: express.Application = express();
app.use(cors());
app.use(express.json())

app.get("/", (_req: Request, res: Response): void => {
    res.status(200).send("server working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
