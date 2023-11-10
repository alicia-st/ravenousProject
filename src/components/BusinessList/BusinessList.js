import React from "react";
import styles from './BusinessList.module.css'

import Business from "../Business/Business";
const BusinessList=({businessObject})=>{
    return (
        <div className={styles.BusinessList}>
            <Business business={businessObject} />
            <Business business={businessObject} />
        </div>
    );
};
export default BusinessList;