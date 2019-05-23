import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Input.module.css';


const Input = ({validation, className, placeholder, multiline, ...attrs}) => {



    const classes = classNames(
        styles['Input'],
        styles[className],
        styles[validation]
    );

    const Tag = multiline ? 'textarea' : 'input';

    return (
        <div className={styles.Wrapper}>
            <Tag
                className={classes}
                placeholder={placeholder}
                {...attrs}/>
        </div>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    validation: PropTypes.oneOf(['valid', 'invalid', 'info']),
    placeholder: PropTypes.string,
    multiline: PropTypes.bool
};

Input.defaultProps = {
    placeholder: null,
    className: '',
    validation: 'info',
    multiline: false
};

export default Input;
