"use server"
import OpenAI from "openai";


export const openaiAction = async (requirements: string) => {

const apiKey = process.env.REACT_APP_OPENAI_API_KEY
  const openai = new OpenAI({ apiKey });
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": "You are a chatbot from project x, a freelancing platform. User will give you what they want to get done from a freelancer, and your job is to write a requiremeent post for them. Also, return a JSON object with the proposal title, details, price, and delivery time, skills, experience, etc."},
      {"role": "user", "content": requirements}
    ],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices[0]);
  return completion.choices[0].message;
}