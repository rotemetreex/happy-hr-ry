import React, { useState, useRef, useEffect } from "react";
import "../searchbar/SearchBar.css";
// import SearchRuslutRow from "../searchResultRow/SearchResultRow.js";
import SearchInput from "../searchInput/SearchInput.js";
import { IoSearch, IoClose } from "react-icons/io5";
import { useClickOutside } from "react-click-outside-hook";
import FadeLoader from "react-spinners/FadeLoader";
import { useDebounce } from "../../hooks/debounceHook";
import axios from "axios";
import SearchResultRow from "../searchResultRow/SearchResultRow";

function SearchBar({ results, setResults, chosenDrink, setChosenDrink, chosenDrinkId, setChosenDrinkId }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isEmpty = !results || results.length === 0;
  const [isNoResults, setIsNoResults] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
    setIsLoading(true);
  };

  const handleCollapse = () => {
    // console.log(parentRef);
    // console.log(inputRef);

    setIsExpanded(false);
    setSearchQuery("");
    setResults([]);
    // setIsNoResults(true);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const onchangeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    // console.log(searchQuery);
  };

  useEffect(() => {
    if (isClickedOutside) handleCollapse();
  }, [isClickedOutside]);

  const prepareSearchQuery = (query) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`;
    return encodeURI(url);
  };

  const searchData = async () => {
    if (!searchQuery || searchQuery.trim() === "") {
      return;
    }
    setIsLoading(true);
    const URL = prepareSearchQuery(searchQuery);
    const response = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });
    if (response) {
      if (response.data === "") {
        console.log("No results for this query...");
        setIsNoResults(true);
      } else {
        setIsNoResults(false);
        console.log("Response.data.drinks: ", response.data.drinks);
        setResults(response.data.drinks);
      }
    }
    setIsLoading(false);
  };
  useDebounce(searchQuery, 500, searchData);
  // console.log(results);

  return (
    <div className="appContainer">
      <div
        className={
          isExpanded
            ? "searchBarContainer expanded"
            : "searchBarContainer collapsed"
        }
        onFocus={handleExpand}
      >
        <div
          className="searchInputContainer"
          ref={parentRef}
          // transition={containerTransition}
        >
          <IoSearch className="searchIcon" />
          <SearchInput
            className="searchInput"
            placeholder="Search for Drinks..."
            onFocus={handleExpand}
            ref={inputRef}
            searchQuery={searchQuery}
            onChangeHandler={onchangeHandler}
            handleCollapse={handleCollapse}
            searchData={searchData}
            onKeyPress={handleCollapse}
          />
          {isExpanded && (
            <IoClose className="closeIcon" onClick={handleCollapse} />
          )}
        </div>

        {isExpanded && <span className="line-seperator" />}

        <div className="content">
          {isExpanded && isLoading && !isNoResults && (
            <div className="loading-wrapper">
              <FadeLoader
                loading
                color="#33ccd1"
                height={12}
                margin={0.5}
                width={6}
              />
            </div>
          )}

          {!isLoading && !isEmpty && isExpanded && !isNoResults && (
            <>
              {results.map((drink) => {
                return (
                  <SearchResultRow
                    key={drink.idDrink}
                    results={results}
                    drinkID={drink.idDrink}
                    thumbnailSrc={drink.strDrinkThumb}
                    name={drink.strDrink}
                    chosenDrink={chosenDrink}
                    setChosenDrink={setChosenDrink}
                    chosenDrinkId={chosenDrinkId}
                    setChosenDrinkId={setChosenDrinkId}
                    handleCollapse={handleCollapse}
                  />
                );
              })}
            </>
          )}

          {isNoResults && isExpanded && !isLoading && searchQuery && (
            <div className="loadingWrapper">
              <div className="warningMessage">
                No results for this query... try again!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

{
  /* #33ccd1 */
}
{
  /* #3979da */
}
