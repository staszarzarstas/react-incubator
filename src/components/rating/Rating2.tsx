import React from 'react';

const Rating2 = () => {
    const [rating, setRating] = React.useState<number>(0);

    return (
        <div>
            <Star selected={rating > 1} setRating={() => {setRating(1)} } />
            <Star selected={rating > 2} setRating={() => {setRating(2)} } />
            <Star selected={rating > 3} setRating={() => {setRating(3)} } />
            <Star selected={rating > 4} setRating={() => {setRating(4)} } />
            <Star selected={rating > 5} setRating={() => {setRating(5)} } />
        </div>
    );
};

type StarPropsType = {
    selected: boolean;
    setRating: (rating: 1 | 2 | 3 | 4 | 5) => void;
};

export function Star(props: StarPropsType) {
    const starStyle = {
        cursor: 'pointer',
    }

return  (
        <span style={starStyle} onClick={() => {
            props.setRating
        }}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
    )
}

export default Rating2;
