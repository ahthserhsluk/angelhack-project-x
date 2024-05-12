"use server"
import OpenAI from "openai";
import { generateObject } from 'ai';
import { z } from 'zod';

export const openaiAction = async (requirements: string) => {

const apiKey = process.env.REACT_APP_OPENAI_API_KEY
  const openai = new OpenAI({ apiKey });
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": `You are a chatbot from project x, a freelancing platform. User will give you what they want to get done from a freelancer, and your job is to write a requiremeent post for them.  return a JSON object  
      
        {
          "proposal_title": "Proposal Title",
          "details": "Proposal Details",
          "price": "Proposal Price",
          "delivery_time": "Proposal Delivery Time",
          "skills": "Proposal Skills"
        }
      
      go with general skills rather than any tech stack focused, experience, etc. users belong to india, so keep that in mind., also keep the proposal simple and easy to understand.`},
      {"role": "user", "content": requirements}
    ],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices[0]);
  return completion.choices[0].message.content;
}



import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';


export async function openaiAction2(userInput: string) {
  const result = await generateText({
    model: openai('gpt-3.5-turbo'),
    prompt: `You are a chatbot from project x, a freelancing platform. User will give you what they want to get done from a freelancer, and your job is to write a requiremeent post for them.  return a JSON object  
        
    {
      "proposal_title": "Proposal Title",
      "details": "Proposal Details",
      "price": "Proposal Price",
      "delivery_time": "Proposal Delivery Time",
      "skills": "Proposal Skills"
    }
    user: ${userInput}
  
  go with general skills rather than any tech stack focused, experience, etc. users belong to india, so keep that in mind., also keep the proposal simple and easy to understand.`,
  });
  
  console.log({"data":result.text});
  return result;
  
  }

  
export async function openaiAction3(userInput: string) {
  const { object } = await generateObject({
    model:openai('gpt-3.5-turbo'),
    schema: z.object({
      proposal_title: z.string(),
      details: z.string(),
      price: z.number(),
      delivery_time: z.string(),
      skills: z.string(),
    }
  ),
    prompt: `You are a chatbot from project x, a freelancing platform. User will give you what they want to get done from a freelancer, and your job is to write a requiremeent post for them.  return a JSON object.
    go with general skills rather than any tech stack focused, experience, etc. users belong to india, keep prices in ruppe, so keep that in mind., also keep the proposal simple and easy to understand. user: ${userInput} ` ,
  });
  console.log({data:object});
  return object;
  }
