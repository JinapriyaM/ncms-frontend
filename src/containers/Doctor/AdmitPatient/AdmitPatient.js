import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

import Card from "../../../components/MiscElements/Card";


const AdmitPatient = () => {
    const [newPatient, setNewPatient] = useState(
        {
            Response: ["aaa","bbb"]
        }
    );
    useEffect(() => {
        const getNewPatient = async () => {
            try {
                const response = await fetch('http://localhost:8080/doctor/getNotAdmitPatients')
                const responseData = await response.json();
                setNewPatient(responseData);
                console.log(responseData.Response.value);
                if(!response.ok){
                    throw new Error(responseData.message);
                }
            }catch(error){
                
            }
        }
        getNewPatient();
    }, [])

    const newPatientList = newPatient.Response.map((i, index) => {
        return <li key={index}>i</li>
    })
    console.log(newPatient);
    return (<div>
        {console.log(newPatient)}
        <ul>{newPatientList}</ul>
        
    </div>)
}

export default AdmitPatient;