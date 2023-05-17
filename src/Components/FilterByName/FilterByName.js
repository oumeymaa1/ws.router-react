import React from 'react';
import{Form} from 'react-bootstrap';
import "./FilterByName.css"

const FilterByName = ({inputSearch, setInputSearch}) => {
    return (
    <div>
    <Form.Control 
    type= 'text' 
    placeholder= 'Enter Movie Title ...'
    value={inputSearch} 
    onChange={(e) => setInputSearch(e.target.value)}
    className='inputSearch'
    style={{width:'60%', marginLeft:'20%'}}
    />
    </div>
    )
}

export default FilterByName;