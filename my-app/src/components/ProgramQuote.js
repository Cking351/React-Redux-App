import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import {  fetchQuote  } from '../store/actions';

const ProgramQuote = props => {
    useEffect(() => {
        // calling the action creater here!
        props.fetchQuote()
    }, [])


    return (
        <div>
          <h1>Kanye Quotes</h1>
          {props.isFetching && (
          <Loader 
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
          )}
          {props.quote && <h3>"{props.quote}"</h3>}
          {props.error && <p className="error">{props.error}</p>}
          <button onClick={props.fetchQuote} >Fetch a new quote</button>
          </div>
      )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchQuote}
) (ProgramQuote)