import React from "react";

type AccordionPropsType = {
    titleValue: string
}

export function Accordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <div style={{cursor: 'pointer'}}>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)}}/>
            {/*// Если collapsed true ==> Переходи к следующему и верни его (нарисуй)*/}
            {!collapsed && <AccordionBody/>}
        </div>
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


type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("accrenderingTitle")
    return (
        <>
            <h3 onClick={(event) => {props.onClick()}}>{props.title}</h3>
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