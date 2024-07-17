import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config()

export const openai = new OpenAI({
  organization: process.env.ORG_KEY,
  project: process.env.PROJ_KEY,
  apiKey: process.env.OPENAI_API_KEY,
});

async function main(): Promise<void> {
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "youre a dungeon master for dnd generate me a short start to a journey including any dice rolls you think are necassary" }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

export async function generateStory(): Promise<void> {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: "your a dungeon master. generate a story and make sure to include dice rolls where needed",
    max_tokens: 400,
  });
  console.log(response);
}

main()
