import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { iconTypes } from "./types";

import styles from './Icon.module.css'


const Icon = ({ id, iconType, className,
                  onClickAction, ...attrs }) => {



    const iconStyles = classNames(
        styles['Icon'],
        styles[className],
        styles[iconType]
    );

    return (
        <>
            <label onClick={onClickAction} className={styles.Wrapper} htmlFor={id}>
                <img id={id} className={iconStyles}
                     src={iconTypes[iconType]}
                     alt={iconType}
                     {...attrs}/>
            </label>
        </>
    )
};

Icon.propTypes = {
    id: PropTypes.string,
    iconType: PropTypes.oneOf(['valid', 'invalid', 'info',
        'erase', 'arrowdown', 'phone', 'location']).isRequired,
    className: PropTypes.string,
    onClickAction: PropTypes.func
};

Icon.defaultProps = {
    id: '',
    iconType: 'info',
    className: '',
    onClickAction: () => {}
};

export default Icon;
