
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import styles from './App.module.css';
import searchBusinesses from '../../utils/yelpAPI.js';
import { useState } from 'react';


function App() {
    const [businesses, setBusinesses] = useState([]);
    const searchYelp = async (term, location, sortBy) => {
        const businesses = await searchBusinesses(term, location, sortBy);
        setBusinesses(businesses);
    };

    return (<div className={styles.App}>
        <h1>ravenous</h1>
        <SearchBar searchBusinesses={searchYelp} />
        <BusinessList businesses={businesses} />
    </div>);
};

export default App;