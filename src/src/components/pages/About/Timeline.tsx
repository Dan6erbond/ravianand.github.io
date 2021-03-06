import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faSchool} from "@fortawesome/free-solid-svg-icons";

import "./Timeline.scss";

import {ReactComponent as FrenchFlag} from "../../../img/french_flag.svg";

interface TimelineElement {
    date: string;
    name: string;
    subtitle?: string;
    description?: string;
    active: boolean;
    icon: JSX.Element;
}

const timelineElements: TimelineElement[] = [{
    active: false,
    name: "BlueMouse GmbH",
    subtitle: "Internship",
    description: "Will spend a year as an intern at the BlueMouse GmbH developing websites.",
    date: "2020 - 2021",
    icon: <FontAwesomeIcon style={{width: '24px'}}
                           icon={faBuilding}/>
}, {
    active: true,
    name: "IMS Aarau",
    subtitle: "Computing College",
    description: "Studying at the Computing College in Aarau with a focus on software development.",
    date: "2017 - present",
    icon: <FontAwesomeIcon style={{width: '24px'}}
                           icon={faSchool}/>
}, {
    active: false,
    name: "Studied in Montpellier, France",
    subtitle: "Language Stay",
    description: "Spent three weeks at the ILA French language school in Montpellier to brush up on my French skills.",
    date: "September 2020",
    icon: <FrenchFlag/>
}, {
    active: false,
    name: "Bezirksschule Zofingen",
    subtitle: "Junior High School",
    description: "Studied at the junior highschool in Zofingen and started taking computer science courses.",
    date: "2013 - 2017",
    icon: <FontAwesomeIcon style={{width: '24px'}}
                           icon={faSchool}/>
}, {
    active: false,
    name: "Quartierschule Mühlethal",
    subtitle: "Primary School",
    date: "2009 - 2013",
    description: "Skipped the 5th grade in primary school.",
    icon: <FontAwesomeIcon style={{width: '24px'}}
                           icon={faSchool}/>
}];

export default function Timeline() {
    return (
        <React.Fragment>
            <VerticalTimeline>
                {timelineElements.map((e, i) => <VerticalTimelineElement key={i}
                                                                         className={e.active ? "vertical-timeline-element-active" : undefined}
                                                                         date={e.date}
                                                                         icon={e.icon}>
                    <h3 className="vertical-timeline-element-title">{e.name}</h3>
                    {e.subtitle ? <h4 className="vertical-timeline-element-subtitle">{e.subtitle}</h4> : null}
                    {e.description ? <p>
                        {e.description}
                    </p> : null}
                </VerticalTimelineElement>)}
            </VerticalTimeline>
        </React.Fragment>
    );
}