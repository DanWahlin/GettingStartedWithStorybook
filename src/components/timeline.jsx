import React from "react";

import Timeline, { TimelineStep } from "@kiwicom/orbit-components/lib/Timeline";

export const TimeLine = (props) => (
    <Timeline>
      {props.steps.map(step => {
       return <TimelineStep
        label={step.label}
        subLabel={step.subLabel}
        type={step.type}
        >
          {step.description}
        </TimelineStep>
      })}
    </Timeline>
    );