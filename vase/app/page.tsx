'use client';

import Image from 'next/image'
import lotus from './assets/lotus.jpg'

import { useChat } from '@ai-sdk/react';
import { Message } from "ai";

import Bubble from './components/Bubble';
import LoadingBubble from './components/LoadingBubble';
import PromptSuggestionsRow from './components/PromptSuggestionsRow';

const Home = () => {
    //COMMENT: Next.js App Router Resources
    const { append, messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat();

    const noMessages = !messages || messages.length === 0;

    const handlePrompt = (promptText) => {
        const msg: Message = {
            id: crypto.randomUUID(),
            context: promptText,
            role: "user"
        }; 

        append(msg)
    }

    return (
        <main>
            <Image src={lotus} width={250} alt="Lotus Logo" />
            <section className={noMessages ? "" : "populated" } >
                {noMessages ? (
                    <>
                    <p className="start-text">
                        Ask Vase3 about F1 racing topics. 
                        Lorem ipsum dolor sit amet, ex amet falli similique mea,
                        sea eu magna debet postea. Stet meis indoctum ex vim. 
                        Ne corpora periculis sit, ne quem lorem vulputate pri. 
                        Eu utroque luptatum sit. Eos an autem partem.
                    </p>
                    <br>
                    </br>
                    <PromptSuggestionsRow onPromptClick={handlePrompt} />
                    
                    </>
                ) : (
                    <>
                    {messages.map((message, index) => {<Bubble key={`message-${index}`} message={message} /> } )}
                    {isLoading && <LoadingBubble />}

                    </>
                )}
            </section>
             <form onSubmit={handleSubmit}>
                    <input className="question-box" 
                    onChange={handleInputChange} 
                    value={input} 
                    placeholder="Ask me something..." />
                    <input type="submit"/>

                </form>
            
        </main>
    )
}

export default Home

