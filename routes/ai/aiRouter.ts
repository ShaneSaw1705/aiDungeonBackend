import express, { Request, Response } from "express";
import { main } from "../../ai/agent";

const router = express.Router();

router.post("/", async (req, res): Promise<Response> => {
  const prompt: string = req.body;
  const response = await main(prompt);
  return res.json(response).status(200);
});

export default router;
