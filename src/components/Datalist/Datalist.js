import React, { useState } from 'react';
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import PropTypes from 'prop-types';

import styles from './Datalist.module.css'

const Datalist = ({ options, value, onOptionSelected, onEraseText, ...attrs }) => {

    const [listOpened, setListOpened] = useState(false);

    return (
        <>
            <div className={styles.DatalistInputWrapper}>
                <div className={styles.Container}>
                    <Input value={value} className='DatalistInput' {...attrs}/>
                    <Icon onClickAction={onEraseText} id='erase' iconType='erase'/>
                    <Icon onClickAction={() => setListOpened(!listOpened)} id='arrowdown' iconType='arrowdown'/>
                </div>
                { listOpened &&
                <ul className={styles.List}>
                    { options.map((city, index) => <li onClick={(event) => {onOptionSelected(event); setListOpened(false)}}
                                                       className={styles.Option}
                                                       id={index}
                                                       key={index}>{city}</li>) }
                </ul> }
            </div>
        </>
    )
};

Datalist.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string,
    onEraseText: PropTypes.func.isRequired,
    onOptionSelected: PropTypes.func.isRequired
};

Datalist.defaultProps = {
    options: [],
    value: '',
    onEraseText: () => {},
    onOptionSelected: () => {}
};

export default Datalist;
