const yelpKey = 'IKY4tlABqQTjsrgK94Qv6rZ1v7iR6Cm--9KqXYnae7y9poEP3Zl6nEPRPpG4hdTwkiT5zx9Q6sOLeQcroflLd6rf3t4ewYVMS1qZrG9b5MrLmkkWUts5BwkhAftQZXYx';
const yelpUrl = 'https://api.yelp.com/v3/businesses/search';


const searchBusinesses = async (term, location, sortByOption) => {
    const requestParams = `?term=${term}&location=${location}&sort_by=${sortByOption}&limit=20`;
    const bypassCORS = 'https://cors-anywhere.herokuapp.com/';
    const urlToFetch = bypassCORS + yelpUrl + requestParams;
    const optionsAPI = {
        headers: {
            Authorization: `Bearer ${yelpKey}`,
        },
    };
    try {
        const response = await fetch(urlToFetch, optionsAPI);
        if (response.ok) {
            const responseJson = await response.json();
            console.log(responseJson);
            if (responseJson.businesses) {
                return responseJson.businesses.map((business) => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }));
            };
        };
        
    } catch (err) {
        console.log(err)
    };
}; 

export default searchBusinesses;