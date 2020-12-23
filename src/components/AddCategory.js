import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        
        setInputValue( value );
    }
        

    //Se utiliza para prevenir el refresco del navegador al dar enter
    const handleSumbit = (e) => {

        e.preventDefault();
        
        if( inputValue.trim().length > 1 ) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
        
        
    };

    
    return (
        
           <form onSubmit={ handleSumbit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
           </form>
        
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
    
    
    
