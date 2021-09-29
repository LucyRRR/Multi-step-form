import React from 'react';
import axios from 'axios';

const Success = (values) => {


    Putrequest(values);


    return (
        <div>
            <h3>You are done!</h3>
        </div>
    )
}

function Putrequest(values) {

    axios.put('http://localhost:3001/lead', values);
}

export default Success