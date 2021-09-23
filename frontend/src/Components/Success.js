import React from 'react';
import axios from 'axios';

const Success = (values) => {

    console.log("sme v success");
    Putrequest(values);

    console.log("sme v success za putrequest");
    return (
        <div>
            <h3>You are done!</h3>
        </div>
    )
}

function Putrequest(values) {
    console.log("sme v success v putrequest");
    axios.put('http://localhost:3001/lead', values);
}

export default Success