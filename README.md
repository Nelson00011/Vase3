<h1 align="center">Vase3</h1>

`main image`

## Description:
Study for Language Learning Models (LLM); Build a Fullstack with Retrieval-Augmented Generation (RAG) application. Basic application for fun practice and Vase building. The Expression *One Vase A day will teach you more than spending hours trying to perfectly make one vase.* 

## Technology Stack
- **Frontend/Client:** Next.js, HTML5, CSS
- **API:** LangChain, DataStrax, AstraDB, OpenAI, 
- **Backend/Server:** Node.js, env, /express or python alternatives, include databases

<h2 align="center">Video:</h2>

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>

`selected image 1`

`selected image 2`

`selected image 3`

## Run Code (Environment)

### Front-End Instructions `<examples below>`
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-next-app <project name>
> cd <project name>
> npm install @datastax/astra-db-ts langchain openai dotenv
> npm install @langchain/community @langchain/core puppeteer
> npm install langchain puppeteer
> npm install ai
> npm install ts-node
> npm install @ai-sdk/react
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Instructions `<examples below>`
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
```
> npx create-strapi-app@latest <project name>
> cd <project name>
> npm install --save stripe
```
- Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public
- When using .env variables remember to [install prior](https://www.npmjs.com/package/dotenv/v/14.0.0)
```
npm install dotenv --save
```
-
    - Create a .env file in the root directory of your project.
    - Import and configure dotenv.
    - Establish a .gitignore [here](https://git-scm.com/docs/gitignore)

- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment


## Contact:
<!--- You can add in your linkedin, medium, stack overflow, dev.to account, etc. here --->
If you want to contact me you can reach me at <nelson@oakhalo.com>.

Connect with me on <a href="https://www.linkedin.com/in/ayla-nelson/">LinkedIn</a>

Connect with me on <a href="https://github.com/oakHalo">Oakhalo.dev</a>

## Resources:

- **LangChain** for large language models (LLM) [here](https://www.langchain.com/)
    - Retrieval Augmented Generation (RAG) [here](https://python.langchain.com/docs/tutorials/rag/)
    - LangChain, Lang[Graph](https://www.langchain.com/langgraph), Lang[Flow](https://www.langflow.org/) and Lang[Smith](https://www.langchain.com/langsmith) serve distinct but complementary roles in the development and deployment of Large Language Model (LLM) applications
    - **Puppeteer** documents [here](https://pptr.dev/)
    - Installation [here](https://js.langchain.com/docs/how_to/installation/) that can be confirmed

- **DataStax** for Generative AI App Creation and Development [here](https://www.datastax.com/)
    - **DataAPI** Documents [here](https://docs.datastax.com/en/astra-db-serverless/api-reference/collection-methods/create-collection.html)
    - **Chunking:** Let's Break It Down [here](https://www.datastax.com/blog/chunking-to-get-your-data-ai-ready)

- **OpenAi** for chatGPT [here](https://openai.com/)
    - **API Platform** [here](https://platform.openai.com/docs/overview). Embedding V3 large and Embedding V3 small. 
    - **AI** npm packages [here](https://www.npmjs.com/package/ai) and Next.js App Router [here](https://www.npmjs.com/package/ai/v/3.3.3)
        - The distinction between `ai/react` and `@ai-sdk/react` lies in the evolution and organization of the Vercel AI SDK.
        - `ai/react` (Older):
            This refers to the earlier, more general package for integrating AI functionalities into React applications within the Vercel AI SDK. It provided hooks and utilities for interacting with large language models (LLMs) and building AI-powered UIs.
        - `@ai-sdk/react` (Current - *had to be installed to allow functionality*):
            This is the modern, namespaced package within the Vercel AI SDK specifically designed for React integration. The Vercel AI SDK has adopted a modular approach, where different functionalities and framework integrations are provided through distinct, scoped packages. @ai-sdk/react contains the React-specific hooks and components, such as useChat and useCompletion, that simplify building conversational interfaces and other AI-driven features in React applications.
        - In essence, `@ai-sdk/react` is the current and recommended way to leverage the Vercel AI SDK within a React project, replacing the older ai/react package with a more organized and maintainable structure.
        ```
        > npm install @ai-sdk/react
        ```

    - **API keys** [here](https://platform.openai.com/settings/organization/api-keys).
    - **Embeddings** information [here](https://platform.openai.com/docs/guides/embeddings) and get dimensions from datastrux `1536`. Additional vector info [here](https://www.datastax.com/guides/what-is-a-vector-database)

- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- **React.New** allows for testing new React projects [here](react.new)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 


#### **style:** 
- `frameworks and links associated`

- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- **ColorHexa** converter [here](https://www.colorhexa.com/) for hexadecimal (HEX), RGB, HSL
- Google Fonts [here](https://fonts.google.com/)

#### **helpful hint:** 
- `useful hints for future projects to go faster`
- console log testing with `ctr-alt-l` 
- confirm active packages in folder with below command: 
    ```
    > npm list
    ```
- **Make sure to update billing** in corresponding API's, not everything is free (*give 30 minutes after account set-up for it to activate*)
- Set Timer's for data loading and transfer, so that I can anticipate future data transfer *pauses* and do research and other things during that time. 
    - **~30 minutes** for vector loading to DataStax
- check for `s`
- Always Stay Positive & Triple Check Permissions :)
- When installing packages do it in the correct folder / level :) 
```
>  "type": "module",
```
- **Uninstall packages** command 
```
> npm uninstall <package_name>
> npm install <package-name>@<version-number>
```
- Overriding / Resolutions / Compiler outdated packages
```
>             "overrides": {
              "langchain": "0.3.30"
            }
>            "resolutions": {
              "langchain": "0.3.30"
            }
>           "compilerOptions": {
            "module": "commonjs",
            }
> npm install
```

- Cleaning up Node.Modules with junk; delete node_modulus, package.json, package-lock.json `cd` into file to avoid issues like this! Make sure to `cd` into the correct project folder, check package folder location. 
- Check versioning: current, wanted, latest, location with command [here](https://docs.npmjs.com/cli/v11/commands/npm-outdated)
   
 ```
> npm outdated
```

- Folder Structure for applications should be double checked with `404` error. 
- Making code a comment is `Ctrl + /`

<!-- 
### TODO stx: 
Future Structure (stx):
backend
frontend
images
screenShots [contains video link]
troubleShooting
---
https://www.youtube.com/watch?v=rQdibOsL1ps
https://www.youtube.com/watch?v=d-VKYF4Zow0
--
- **Arkiv** for scientific literature and articles from Cornel [here](https://arxiv.org/)

- npx set-up requirements
ESLint: Yes
Tailwind CSS: No
src/ directory: No
App Router: No
Import Alias: No

npm install @datastax/astra-db-ts@1.1.0
npm install langchain@0.1.36  
npm install openai@4.41.0 
---
strict set to false
---

from astrapy.info import CollectionVectorServiceOptions
from astrapy.constants import VectorMetric

collection = database.create_collection(
    "COLLECTION_NAME",
    metric=VectorMetric.DOT_PRODUCT,
    dimension=1536,
    service=CollectionVectorServiceOptions(
        provider="openai",
        model_name="text-embedding-3-small",
        authentication={
            "providerKey": "API_KEY_NAME",
        },
    ),
)


-->

