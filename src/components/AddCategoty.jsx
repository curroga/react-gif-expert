import { useState } from "react"


export const AddCategoty = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories] ); // utilizamos un callback
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit } >
        <input
            type="text"
            placeholder="Buscar gifs" 
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
