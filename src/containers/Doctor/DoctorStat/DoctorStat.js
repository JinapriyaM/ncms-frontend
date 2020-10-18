import React, { useEffect, useState } from 'react';

const DoctorStat = () => {
    const [doctorStatistics, setDoctorStatistics] = useState();
    useEffect(() => {
        const getStat = async () => {
            try{
                const response = await fetch('http://localhost:8080/statistics?user=general')
                const responseData = await response.json();
                setDoctorStatistics(responseData.Response);
                console.log(responseData);
                if(!response.ok){
                    throw new Error(responseData.message);
                }
            }catch(error){
                
            }
        }
        getStat();
    }, [])
    return (
        <div>
            <h1>Doctor Statistics: </h1>
            <label>{doctorStatistics} </label>
        </div>
    )
}

export default DoctorStat;