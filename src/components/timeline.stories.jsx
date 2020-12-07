import React from 'react';

import { TimeLine } from './timeline';

export default {
  title: 'Example/TimeLine',
  component: TimeLine
};

const steps = [
    {label: 'Refund requested', subLabel:"3rd May 14:04", type: 'success', description: 'We have received your request and will assign it to one of our agents.'},
    {label: 'In progress', subLabel:"4th May 10:25", type: 'success', description: 'We’ll review your request and apply for any available refund from the carrier(s).'},
    {label: 'Carrier approved', subLabel:' ', type: '', description: 'Carrier approved refund.'},
    {label: 'Refund completed', subLabel:' ', type: '', description: 'Refund issued.'}
];


const stepsWithWarning = [
  {label: 'Refund requested', subLabel:"3rd May 14:04", type: 'success', description: 'We have received your request and will assign it to one of our agents.'},
  {label: 'In progress', subLabel:"4th May 10:25", type: 'success', description: 'We’ll review your request and apply for any available refund from the carrier(s).'},
  {label: 'Warning', subLabel:'4th May 13:25', type: 'warning', description: 'Carrier requires more information.'},
  {label: 'Refund completed', subLabel:'Refund issued', type: '', description: 'Refund issued.'}
];

const stepsWithCritical = [
  {label: 'Refund requested', subLabel:"3rd May 14:04", type: 'success', description: 'We have received your request and will assign it to one of our agents.'},
  {label: 'In progress', subLabel:"4th May 10:25", type: 'success', description: 'We’ll review your request and apply for any available refund from the carrier(s).'},
  {label: 'Call required', subLabel:'5th May 12:00', type: 'critical', description: 'Please call the carrier at 800-123-1234.'},
  {label: 'Refund completed', subLabel:'Refund issued', type: '', description: 'Refund issued.'}
];

const Template = (args) => <TimeLine {...args} />;

export const UncompletedSteps = Template.bind({});
UncompletedSteps.args = {
  steps
};

// export const WarningSteps = Template.bind({});
// WarningSteps.args = {
//   steps: stepsWithWarning
// };

// export const CriticalSteps = Template.bind({});
// CriticalSteps.args = {
//   steps: stepsWithCritical
// };
