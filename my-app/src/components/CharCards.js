import React from 'react'

const CharCards = props => {
    return (
        <div>
            <img src={props.cards.image} />
            <h4>{props.cards.quote}</h4>
            <h5>{props.cards.character}</h5>
        </div>
    )
}

export default CharCards;