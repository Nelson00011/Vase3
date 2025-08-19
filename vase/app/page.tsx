'use client';

import Image from 'next/image'
import lotus from './assets/lotus.jpg'

import { useChat } from '@ai-sdk/react';
import { Message } from "ai";

const Home = () => {
    //COMMENT: Next.js App Router Resources
    const { append, messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat();

    //TODO: noMessages
    const noMessages = true;

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
                    {/*<PromptSuggestionResponse/>*/}
                    
                    </>
                ) : (
                    <>
                    {/*<map text bubbles/> Next.js App Router Resources*/}
                    {/* <LoadingBubble /> */}

                    </>
                )}
            </section>
             <form onSubmit={handleSubmit}>
                    <input className="question-box" onChange={handleInputChange} value={input} placeholder="Ask me something..." />
                    <input type="submit"/>

                </form>
            
        </main>
    )
}

export default Home

