import { StreamingTextResponse, experimental_streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { user }: { user: string } = await req.json();

  const result = await experimental_streamText({
    model: openai('gpt-3.5-turbo'),
    prompt:`You are a chatbot from project x, a freelancing platform. User will give you what they want to get done from a freelancer, and your job is to write a requiremeent post for them.  return a JSON object  
      
    {
      "proposal_title": "Proposal Title",
      "details": "Proposal Details",
      "price": "Proposal Price",
      "delivery_time": "Proposal Delivery Time",
      "skills": "Proposal Skills"
    }
    user: ${user}
  
  go with general skills rather than any tech stack focused, experience, etc. users belong to india, so keep that in mind., also keep the proposal simple and easy to understand.`,
  });

  return new StreamingTextResponse(result.toAIStream());
}