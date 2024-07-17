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
    messages: [{ role: "user", content: "Say this is a test" }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

main()
