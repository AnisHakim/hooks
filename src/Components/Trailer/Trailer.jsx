import React from 'react'
import { Link } from 'react-router-dom';
import './Trailer.css'
const Trailer = (props) => {
    const myProps = props.location.myCustomProps;
    return (
        <div className="trailer">
            <iframe width="560" height="315" src={myProps.video}></iframe>
            <br />
            <p style={{ color: 'rgb(105,105,105)', fontWeight: 'bold', fontSize: '20px' }}>{myProps.description}</p>
            <Link to='/'>
                <button>back Home</button>
            </Link>
        </div>
    )
}

export default Trailer
