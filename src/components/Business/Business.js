import React from 'react';
import styles from './Business.module.css';


 function Business({business}){
     return (
         <div className={styles.Business}>
             <div className={styles.imageContainer}>
                 <img src={business.imageSrc} alt={business.name} />
             </div>
             <h2>{business.name}</h2>
             <div className={styles.informationContainer}>
                 <div className={styles.addressContainer}>
                     <p>{business.address}</p>
                     <p>{business.city}</p>
                     <p>{`${business.state} ${business.zipcode}`}</p>
                 </div>
                 <div className={styles.reviewContainer}>
                     <h3>{business.category}</h3>
                     <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                     <p>{`${business.reviewCount} reviews`}</p>
                 </div>
             </div>
         </div>
     );
};
export default Business;