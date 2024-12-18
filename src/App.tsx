import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {Accordion2} from "./components/accordion/Accordion2";
import {OnOffControlled} from "./components/OnOff/OnOff-controlled";
import {OnOff2Uncontrolled} from "./components/OnOff/OnOff-2-uncontrolled";


function App() {

    let [ratingValue, setRatingValue] = React.useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = React.useState<boolean>(false)
    let [switchOn, setSwitchOn] = React.useState<boolean>(false)
    return (
        <div className="App">

            {/*<Accordion titleValue={'---Menu---'}/>*/}
            {/*<Accordion titleValue={'---Users---'}/>*/}
            {/*<Accordion2 titleValue={"Collapsed or not"}*/}
            {/*            collapsed={accordionCollapsed}*/}
            {/*            onChanged={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            {/*<Rating2/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<OnOffControlled included={switchOn}*/}
            {/*                 onChange={setSwitchOn}/>*/}
            <OnOff2Uncontrolled onChange={setSwitchOn}/> {switchOn.toString()}
            <Accordion titleValue={'Hello'}/>
        </div>
    );
}

type PageTitlePropsType
    = {
    title: string,
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;



