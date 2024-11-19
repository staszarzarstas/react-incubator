import React from 'react';

export type OnOffProps = {
    included: boolean;
}

export const OnOff = (props: OnOffProps) => {
    return (
        <div className="OnOff">
            <div className="state">
                {props.included ? <On included={true} /> : <Off />}
            </div>

            <div className="bulb" style={{ backgroundColor: props.included ? 'green' : 'red' }}></div>
        </div>
    )
}

type OnProps = {
    included: boolean;
}

export const On = (props: OnProps) => {
    return (
        <div
            className="On"
            style={{
                backgroundColor: props.included ? 'green' : 'white',
                color: props.included ? 'white' : 'black',
                padding: '5px',
                borderRadius: '5px',
                textAlign: 'center',
                width: '50px',
                cursor: 'pointer',
            }}
        >
            ON
        </div>
    )
}

export const Off = () => {
    return (
        <div
            className="Off"
            style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '5px',
                borderRadius: '5px',
                textAlign: 'center',
                width: '50px',
                cursor: 'pointer',
            }}
        >
            OFF
        </div>
    )
}
