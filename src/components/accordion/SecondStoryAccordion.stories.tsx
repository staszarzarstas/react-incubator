import React, {useState} from 'react';
import {action, HandlerFunction} from "@storybook/addon-actions";
import {Accordion2} from "./Accordion2";

export default {
    title: "SecondAccordion",
    component: Accordion2,
}
const callback: HandlerFunction = action('accordion mode change event fried')

export const AccordionCollapsedMode = () => <Accordion2 collapsed={true} onChange={callback} titleValue={'Menu'}/>
export const AccordionNotCollapsedMode = () => <Accordion2 collapsed={false} onChange={callback} titleValue={'Menu'}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return (
        <Accordion2 titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
    )

}