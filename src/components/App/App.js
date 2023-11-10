
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import styles from './App.module.css';
const business1 = {
    imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Papa's Pizzeria",
    address: 'Strada Campului',
    city: 'Cluj-Napoca',
    state: 'Cluj',
    zipcode: '100321',
    category: 'Pizzeria',
    rating: 4,
    reviewCount: 19,
};
const business2 = {
    imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Furman",
    address: 'Zvolenská 73',
    city: 'Vidina',
    state: 'Lucenec',
    zipcode: '985 59',
    category: 'Restaurant',
    rating: 4,
    reviewCount: 19,
};
const businesses = [business1,business2];
function App() {
    return (<div className={styles.App}>
        <h1>ravenous</h1>
        <SearchBar />
        {businesses.map(business => (<BusinessList businessObject={business} />))}
    </div>);
};

export default App;