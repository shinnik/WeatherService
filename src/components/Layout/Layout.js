import React from 'react';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
    return (
        <div className={styles.Layout}>
            { children }
        </div>
    )
};
