import React from 'react'

const Filter = ({filter,onChange,onClick}) => {
    
    return (
        
        <div>
    <input
          type='text'
          name='text'
          placeholder='Search movie...'
          value={filter}
          onChange={onChange}
        />
        <button onClick={onClick}>search</button>
        </div>
    )
}

export default Filter
