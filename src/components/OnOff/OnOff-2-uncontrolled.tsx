import React, {useState} from 'react';

type OnOffTwoProps = {
    onChange: (on: boolean) => void
}


export const OnOff2Uncontrolled = (props: OnOffTwoProps) => {

    let [on, setOn] = useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? 'green' : 'white',
        cursor: "pointer",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        padding: "2px",
        backgroundColor: on ? 'white' : 'red',
        cursor: "pointer",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? 'green' : 'red',
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON
            </div>
            <div style={offStyle} onClick={offClicked}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

// export default OnOff2Uncontrolled;