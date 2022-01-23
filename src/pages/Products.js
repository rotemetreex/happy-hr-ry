import React from 'react';
import '../App.css';

function Products({chosenDrink, chosenDrinkId, setChosenDrinkId}) {

  



  return ( <>
            <div className='products'>
              Products
            </div>
            {console.log(chosenDrink)}
            {chosenDrink && (
              <div className='searchResult'>
                {chosenDrink.strDrink}
                {chosenDrink.strDrinkThumb}
                {chosenDrink.strInstructions}
              </div>
            )}
          </>
      
    )
}

export default Products;
