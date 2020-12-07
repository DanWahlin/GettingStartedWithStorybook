import React, { useState } from "react";

import { TimeLine } from "./timeline";

export const TimeLineLookup = () => {
    const [steps, setSteps] = useState([]);
    const stepsData = [
        {label: 'Refund requested', subLabel:"3rd May 14:04", type: 'success', description: 'We have received your request and will assign it to one of our agents.'},
        {label: 'In progress', subLabel:"4th May 10:25", type: 'success', description: 'We’ll review your request and apply for any available refund from the carrier(s).'},
        {label: 'Carrier approved', subLabel:' ', type: '', description: 'Carrier approved refund.'},
        {label: 'Refund completed', subLabel:' ', type: '', description: 'Refund issued.'}
    ];

    const lookupOrder = () => {
        setSteps(stepsData);
    }

    return (
        <div>
            <input type="text" placeholder="Order Number" /> <button onClick={lookupOrder}>View Timeline</button>
            <br /><br />
            <TimeLine steps={steps}></TimeLine>
        </div>
    );
};