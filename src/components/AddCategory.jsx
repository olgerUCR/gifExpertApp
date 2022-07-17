import { useState } from 'react';


export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => setInputValue(target.value)

    const onSubmit = event => {
        event.preventDefault()
        const text=inputValue.trim();
        if (text.length > 0) {
            onAddCategory(text)
            setInputValue('')
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder="Buscar Gifs" value={inputValue} onChange={onInputChanged} />
        </form>
    )
}