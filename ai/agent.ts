import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env.ORG_KEY,
  project: process.env.PROJ_KEY,
  apiKey: process.env.OPENAI_API_KEY,
});
