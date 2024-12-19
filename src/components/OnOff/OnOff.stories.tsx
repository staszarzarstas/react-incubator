import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOffControlled} from "./OnOff-controlled";

export default {
    title: "OnOff",
    component: OnOffControlled,
}
const callback =  action('on or off clicked')

export const OnMode = () => <OnOffControlled included={true} onChange={callback}/>
export const OffMode = () => <OnOffControlled included={false} onChange={callback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <OnOffControlled included={value} onChange={setValue}/>
    )

}