
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import styles from './App.module.css'
function App() {
    return (<div className={styles.App}>
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
    </div>);
};

export default App;