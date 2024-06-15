import { connectToDB } from "@utils/databese"
import Prompt from "@models/prompt"

export const GET = async (request, {params}) => {
  try {
    await connectToDB()

    const prompts = await Prompt.find({
      creator: params.id
    }).populate("creator")

    return new Response(JSON.stringify(prompts), {status:200})
  
  } catch (error) {
    return new Response("failed", {status:500})  
  }

}