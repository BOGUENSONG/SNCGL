import axios from "axios";
import React, { useState, useEffect } from 'react';
// const ApiTest = () => {
//     return axios.get('localhost:5000/Hello?name=LordYuk');
// }

async function ApiTest () {
    return await axios.get('http://localhost:5000/Hello?name=LordYuk');
}


const HomeContainer = () => {
    const [ApiValue, setApiValue] = useState(null); 
    
    useEffect( () => {
            const response = ApiTest().then( function () {
            }).catch(function (error) {
                console.log(error)
            })  ;
            setApiValue(response);

    }, [])
    
    return (
        <div>
            { ApiValue }
        </div>

    )
}

export default HomeContainer;