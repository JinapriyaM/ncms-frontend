import React from 'react';

import './Doctor.css';

import Card from '../../components/MiscElements/Card';
import Button from '../../components/FormElements/Button';

const Doctor = props => {
    return (
    <React.Fragment>
        <Card className="doctor-card">
            <h1>Admit Patient</h1>
            <Button>Click Here</Button>
        </Card>
        <Card className="doctor-card">
            <h1>Discharge Patient</h1>
            <Button>Click Here</Button>
        </Card>
        <Card className="doctor-card">
            <h1>Statistics</h1>
            <Button>Click Here</Button>
        </Card>
    </React.Fragment>
    )
}

export default Doctor;