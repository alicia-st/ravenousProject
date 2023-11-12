import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import  searchBusinesses  from '../../utils/yelpAPI';
const sortByOptions = [
  "Best Match",
  "Highest Rated",
  "Most Reviewed",
];

const SearchBar = () => {
  // Set our initial states

  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortOption, setSortOption] = useState('Best Match');

  // Handling a click for the sort options
  const handleClickOnSort = (sortByOptionValue) => {
    setSortOption(sortByOptionValue);
  };

  // Handling change of term input 
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handling the change of the location input
  const handleSearchLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  // Convert the sort option to a format accepted by the API
  const convertSortOption = (sortOption) => {
    switch (sortOption) {
      case 'Best Match':
        return 'best_match';
      case 'Highest Rated':
        return 'rating';
      case 'Most Reviewed':
        return 'review_count';
      default:
        console.log('Something went very wrong.');
        break;
    };
  };
  // Handling the form submit
  const handleSubmit = (event)=>{
    event.preventDefault();
    //console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${sortOption}`);
    searchBusinesses(searchTerm, searchLocation, convertSortOption(sortOption));
  };
  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{sortByOptions.map((sortByOption, index) =>
          <li
            key={sortByOption}
            className={sortOption === sortByOption ? styles.selected : ''}
            onClick={() => { handleClickOnSort(sortByOption) }}
          >
            {sortByOption}
          </li>
        )}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
      <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses"
            onChange={handleSearchTermChange}
            text={searchTerm} />
          <input placeholder="Where?"
            onChange={handleSearchLocationChange}
            text={searchLocation} />
      </div>
      <div className={styles.SearchBarSubmit}>
        <button type='submit'>Let's Go</button>
        </div>
        </form>
    </div>
  );
};

export default SearchBar;
