import React, { useContext } from 'react'
import PropTypes from 'prop-types';

import { valueContext } from './ChekboxContext';

export default function List(props) {
    const { label } = props;
    const { title, setTitle } = useContext(valueContext);
    
    function handelChange(e) {
        if (e.target.checked) {
            setTitle([...title, { title: label.title, id: label.id }])
        } else {
            setTitle(title.filter(del => del.id != label.id))
        }
    }
    return (
        <div className='d-flex p-8'>
            <input type='checkbox' onChange={handelChange} /><label>{label.title}</label>
        </div>
    )
}
List.propTypes = {
    label: PropTypes.number
  };