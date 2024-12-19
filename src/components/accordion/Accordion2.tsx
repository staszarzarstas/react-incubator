import React from "react";

// Типы для пропсов компонента Accordion2
type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void; // Функция, которая будет вызываться при клике
};

// Основной компонент Accordion2
export function Accordion2(props: AccordionPropsType) {
    return (
        <div style={{cursor: 'pointer'}}>
            {/* Компонент заголовка аккордеона, который вызывает onChanged при клике */}
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>

            {/* Если collapsed === false, показываем AccordionBody */}
            {props.collapsed ? null : <AccordionBody/>}
        </div>
    );
}

// Типы для пропсов компонента AccordionTitle
type AccordionTitlePropsType = {
    title: string;
    onChange: () => void;
};

// Компонент для отображения заголовка аккордеона
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Accordion Rendering");
    return <h3 onClick={(event) => props.onChange()}>{props.title}</h3>;
}

// Компонент для отображения содержимого аккордеона
function AccordionBody() {
    console.log('bodyRendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
