const yelpKey = 'IKY4tlABqQTjsrgK94Qv6rZ1v7iR6Cm--9KqXYnae7y9poEP3Zl6nEPRPpG4hdTwkiT5zx9Q6sOLeQcroflLd6rf3t4ewYVMS1qZrG9b5MrLmkkWUts5BwkhAftQZXYx';
const yelpUrl = 'https://api.yelp.com/v3/businesses/search';


const searchBusinesses = async (term, location, sortByOption) => {
    const requestParams = `?term=${term}&location=${location}&sort_by=${sortByOption}&limit=20`;
    const bypassCORS = 'https://cors-anywhere.herokuapp.com/';
    const urlToFetch = bypassCORS+ yelpUrl + requestParams;
    const optionsAPI = {
        headers: {
            Authorization: `Bearer ${yelpKey}`,
        },
    };
    try {
        const response = await fetch(urlToFetch, optionsAPI);
        const responseJson = await response.json();
        console.log(responseJson);
    } catch (err) {
        console.log(err)
    };
}; 

export default searchBusinesses;