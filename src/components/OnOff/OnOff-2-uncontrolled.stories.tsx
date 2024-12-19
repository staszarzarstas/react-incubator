import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff2Uncontrolled} from "./OnOff-2-uncontrolled";

export default {
    title: "OnOff-Uncontrolled",
    component: OnOff2Uncontrolled,
}
const callback = action('on or off clicked')

export const ModeChangingUncontrolled = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <OnOff2Uncontrolled onChange={setValue}/>
    )

}