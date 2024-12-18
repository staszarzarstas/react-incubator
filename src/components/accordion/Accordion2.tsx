import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChanged: () => void
}

export function Accordion2(props: AccordionPropsType) {

    return (
        <div style={{cursor: 'pointer'}}>
            <AccordionTitle title={props.titleValue}
                            onChanged={props.onChanged}/>
            {/*// Если collapsed true ==> Переходи к следующему и верни его (нарисуй)*/}
            {!props.collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string;
    onChanged: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Accordion Rendering")
    return (

        <h3 onClick={props.onChanged}>{props.title}</h3>

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


// export function Accordion2(props: AccordionPropsType) {
//     if (collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
//     // if (!props.collapsed) {
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     )
//     // }
//
// }