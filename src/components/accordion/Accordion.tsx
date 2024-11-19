import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )


}


export function Accordion2(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
    // if (!props.collapsed) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    )
    // }

}


type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("accrenderingTitle")
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
}

function AccordionBody() {
    console.log('bodyRendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}