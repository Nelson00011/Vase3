//TODO: Api set-up for chat bot.
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { DataAPIClient } from "@datastax/astra-db-ts";

const { ASTRA_DB_NAMESPACE, 
    ASTRA_DB_COLLECTION, 
    ASTRA_DB_API_ENDPOINT, 
    ASTRA_DB_APPLICATION_TOKEN, 
    OPENAI_API_KEY } = process.env

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
}); 

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN)

const db = client.db(ASTRA_DB_API_ENDPOINT, {
    namespace: ASTRA_DB_NAMESPACE
})

export async function POST(req: Request ){
try {

    const { messages } = await req.json()
    const latestMessage = messages[messages?.length - 1]?.content

    let docContext = ""

    const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: latestMessage,
        encoding_format: "float"
    })

    try{
        const collection = await db.collection(ASTRA_DB_COLLECTION)

        const cursor = collection.find(null, {
            sort: {
                $vector: embedding.data[0].embedding,
            },
            limit: 10
        })

        const documents = await cursor.toArray()

        const docsMap = documents?.map(doc => doc.text)

        docContext = JSON.stringify(docsMap)

        // TODO: START HERE
    } catch (err){
        console.log(`Error in route.ts... ${err}`)
        docContext = ""
    }

        const template = {
        role: "system",
        content: `You are an AI assistant trained on Formula One. 
        Based on wikipedia the official F1 website and others.
        in tritani utroque corrumpit mel, ferri summo timeam qui eu, 
        sed agam postulant no. Appareat erroribus consetetur et sit, 
        in mea nisl hendrerit disputando. Mazim phaedrum gloriatur qui et, 
        ex timeam iuvaret per. Iusto scriptorem duo eu, at alii tractatos 
        voluptaria has, ex erant noster intellegebat vim. Eu latine 
        probatus corrumpit sea, homero vivendo ei quo. In congue tation 
        recusabo has. Eu eum eruditi expetendis, pri paulo democritum no, 
        at mei aperiri ocurreret neglegentur.
        ------------
        START CONTEXT
        ${docContext}
        END CONTEXT
        ------------
        QUESTION: ${latestMessage}
        ------------
        `
    }

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        stream: true,
        messages: [template, ...messages]
    });

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)

    } catch (err){
      throw err
    }

}
