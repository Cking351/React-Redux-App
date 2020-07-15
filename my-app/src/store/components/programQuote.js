import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import {  newQuote  } from './store/actions';

const programQuote = props => {
    useEffect(() => {
        props.newQuote()
    }, [])


    return (
        <div>
            <h1>Programming Quotes!</h1>
            {props.isFetching && (
                <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                />
            )}
            {props.quote && <h3>"{props.quote}"</h3>} 
            {props.author && <h4>"{props.author}</h4>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={props.newQuote}>Click here for another quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote.en,
        author: state.quote.author,
        isFetching: false,
        error: ''
    }
}