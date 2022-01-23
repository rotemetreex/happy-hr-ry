import React from 'react';
import '../searchResultRow/SearchResultRow.css';

function SearchResultRow({drinkID, thumbnailSrc, name, results, chosenDrink, setChosenDrink, handleCollapse, chosenDrinkId, setChosenDrinkId}) {

const onClickHandler = () => {
  results.map((drink) => {
    if(drinkID === drink.idDrink) {
      setChosenDrink(drink);
      setChosenDrinkId(drink.idDrink);
      handleCollapse();
    }
  });
}
console.log(results);
console.log(chosenDrink);
console.log(chosenDrinkId);


  return (
  <div

  key={drinkID} 
  className='searchResultContainerRow'>
      <div className='thumbnail'>
          <img src={thumbnailSrc} alt='drink img'/>
      </div>
      <span 
      onClick={onClickHandler}
      >
          <h3>{name}</h3>
      </span>
  </div>)
}

export default SearchResultRow;
