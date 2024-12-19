import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion2 } from './Accordion2';
import React from "react";

// Настройка Storybook
const meta: Meta<typeof Accordion2> = {
    component: Accordion2,
};
export default meta;

type Story = StoryObj<typeof Accordion2>;

// История с закрытым аккордеоном
export const FirstStory: Story = {
    args: {
        titleValue: "Hello",
        collapsed: true,
        onChange: () => {},
    },
};


const onChangeHandler = action('onChanged');


export const CollapsedAccordion = () => {
    return (
        <div>
            <Accordion2
                titleValue={"Collapsed Accordion"}
                collapsed={true}
                onChange={onChangeHandler}
            />
        </div>
    );
};

// История с открытым аккордеоном
export const OpenedAccordion = () => {
    return (
        <div>
            <Accordion2
                titleValue={"Opened Accordion"}
                collapsed={false}
                onChange={onChangeHandler}
            />
        </div>
    );
};

// История с изменяющимся состоянием аккордеона
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <Accordion2
            titleValue={"Collapsed or not"}
            collapsed={collapsed}
            onChange={() => setCollapsed(!collapsed)} // Изменение состояния при клике
        />
    );
};
