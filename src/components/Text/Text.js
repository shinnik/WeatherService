import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Text.module.css'

const sizes = {
    'normal': 'p',
    'S': 'h3',
    'M': 'h2',
    'L': 'h1'
};

export const Text = ({ className, validator, children,
                         size, onClickAction, ...attrs }) => {

    const classes = classNames(
        styles['Text'],
        styles[className],
        styles[size],
        styles[validator]
    );

    const Tag = sizes[size];

    return (
        <Tag onClick={onClickAction} className={classes} {...attrs}>{children}</Tag>
    )

};

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['normal', 'S', 'M', 'L'])
};

Text.defaultProps = {
    className: '',
    children: 'default text',
    size: 'normal'
}
