import React, { useEffect } from 'react';

const DoctorStat = () => {
    useEffect(() => {
        const getStat = async () => {
            try{
                const response = await fetch('http://localhost:8080/statistics?user=general')
                const responseData = await response.json();
                console.log(responseData);
                if(!response.ok){
                    throw new Error(responseData.message);
                }
            }
        }
        getStat();
    }, [])
    return (
        <h1>sssss</h1>
    )
}

export default DoctorStat;