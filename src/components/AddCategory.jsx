import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar gifs"
                // onChange={onInputChange}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
