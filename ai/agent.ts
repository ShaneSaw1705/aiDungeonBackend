import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config()

export const openai = new OpenAI({
  organization: process.env.ORG_KEY,
  project: process.env.PROJ_KEY,
  apiKey: process.env.OPENAI_API_KEY,
});

export async function main(prompt: string): Promise<void> {
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `!!! IMPORTANT - you dont have to always provide a skill check only do so if the player is attempting to do a challenging task - never ever speak for the player or allow the player to do something that couldnt realisticly be done e.g fly without wings or teleport !!! youre a dungeon master responable for creating a story in the style of dnd. I want you to generate short paragraphs and give the player time to create a response on what to do. when ever you recieve a prompt I want you to analyse whether a skill check should be made and also how difficult it is. -- here is the player details: hp = 10, agility = 10, etc, -- promt(${prompt})` }],
    stream: true,
    max_tokens: 400,
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

main('wake up')
