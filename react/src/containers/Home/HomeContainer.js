import axios from "axios";
import React, { useState, useEffect } from 'react';
// const ApiTest = () => {
//     return axios.get('localhost:5000/Hello?name=LordYuk');
// }

async function ApiTest () {
    return await axios.get('backend/Hello?name=LordYuk');
}


const HomeContainer = () => {
    const [ApiValue, setApiValue] = useState(null); 
    
    useEffect( () => {
            ApiTest().then( 
                function (resp) {
                    setApiValue(resp.data);
                }).catch(function (error) {
                    setApiValue("GET FAIL" + error);
                });
            

    }, [])
    
    return (
        <div>
            Api Result:  {ApiValue} 
        </div>

    )
}

export default HomeContainer;