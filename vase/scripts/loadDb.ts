import { DataAPIClient } from "@datastax/astra-db-ts";
import { PuppeteerWebBaseLoader } from 'langchain/document_loaders/web/puppeteer';

import OpenAI from "openai";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import "dotenv/config" 

const { ASTRA_DB_NAMESPACE, 
    ASTRA_DB_COLLECTION, 
    ASTRA_DB_API_ENDPOINT, 
    ASTRA_DB_APPLICATION_TOKEN, 
    OPENAI_API_KEY } = process.env

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const vaseData = [
    "https://en.wikipedia.org/wiki/Formula_One",
    "https://www.skysports.com/f1/news/12433/13408204/f1-driver-market-george-russell-kimi-antonelli-contract-latest-with-seats-available-alongside-max-verstappen-racing-bulls-and-cadillac",
    "https://www.formula1.com/en/latest",
    "https://www.autosport.com/f1/news/the-foundations-sauber-is-laying-to-build-a-winning-f1-culture-as-it-converts-into-audi/10750264/",
    "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship",
    "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship",
    "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship",
    "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions",
    "https://www.formula1.com/en/racing/2024",
    "https://www.formula1.com/en/results/2024/races"
]

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);

const db = client.db(ASTRA_DB_API_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE })

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 512,
    chunkOverlap: 100
});

const createCollection = async () => {
    const res = await db.createCollection(ASTRA_DB_COLLECTION)
}