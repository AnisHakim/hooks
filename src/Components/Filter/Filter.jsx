import './filter.css'
import React from 'react'

const Filter = ({ filter, onChange, onClick }) => {

    return (

        <div>
            <form id="formulaire" onSubmit={onClick}>
                <input
                    type='text'
                    name='text'
                    placeholder='Search movie...'
                    value={filter}
                    onChange={onChange}
                />
                <button type='sumbit'>Search</button>
            </form>

        </div>
    )
}

export default Filter
