import React from 'react';

export type OnOffProps = {
    included: boolean;
    onChange: (included: boolean) => void;
}



export const OnOffControlled = (props: OnOffProps) => {
    const OnOffControlled = {
        display: "flex",
        alignItems: "center",
        gap: 5,
    }
    const styleOn:  React.CSSProperties = {
        backgroundColor: props.included ? 'green' : 'white',
        color: props.included ? 'white' : 'black',
        padding: '5px',
        borderRadius: '5px',
        textAlign: 'center',
        width: '50px',
        cursor: 'pointer',
        border: '1px solid black',
    };
    const styleOff:  React.CSSProperties = {
        backgroundColor: props.included ? 'white' : "red",
        color: props.included ? 'black' : 'white',
        padding: '5px',
        borderRadius: '5px',
        textAlign: 'center',
        width: '50px',
        cursor: 'pointer',
        border: '1px solid black',
    }
    const indicatorStyle:  React.CSSProperties = {
        width: '10px',
        borderRadius: '5px',
        height: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.included ? 'green' : 'red',

    }


    return (
        <div className="OnOff-Controlled" style={OnOffControlled}>
            <div style={styleOn} onClick={() => {props.onChange(true)}}>On</div>
            <div style={styleOff} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}




