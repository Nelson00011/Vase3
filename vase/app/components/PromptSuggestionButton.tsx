//TODO components Prompt Suggestions Button

const PromptSuggestionsButton = ({ text, onClick }) => {

    return (
        <button className="prompt-suggestion-button" 
        onClick={onClick}>
            {text}
        </button>
    )

}

export default PromptSuggestionsButton;