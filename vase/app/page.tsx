"use client"

import Image from 'next/image'
import lotus from './assets/lotus.jpg'

import { useChat } from "ai/react"
import { Message } from "ai"

const Home = () => {

    const { append, isLoading, messages, input, handleInputChange, HandleSubmit } = useChat();

    //TODO: noMessages
    const noMessages = true;

    return (
        <main>
            <Image src={lotus} width={250} alt="Lotus Logo" />
            <section>
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
                    {/*<text bubbles/>*/}
                    {/* <LoadingBubble /> */}

                    </>
                )}
                <form onSubmit={handleSubmit}>
                    <input className="question-box" onChange={HandleInputChange} value={input} placeholder="Ask me sommething..." />
                    <input type="submit"/>

                </form>

            </section>
            
        </main>
    )
}

export default Home

