import React from 'react';
import '../searchInput/SearchInput.css';



// forwarding the ref to the child component:
// SearchBar --->> SearchInput

function SearchInput({onChangeHandler, searchQuery, handleCollapse }, inputRef) {

    return (
        <input 
        className='serachInput'
        ref={inputRef}
        onChange={onChangeHandler}
        value={searchQuery}
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
                console.log(e.key, 'Enetr key pressed');
                console.log(inputRef);
                e.target.blur(); // clears the cursor/focus from input if a key is pressed (not using the mouse with the clickedOutside hook in searchbar)
                handleCollapse();
            }
        }}
        />
    )
}

const forwardInputRef = React.forwardRef(SearchInput);

export default forwardInputRef;
