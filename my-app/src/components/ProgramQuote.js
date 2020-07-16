import React, { useEffect } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Button, Alert } from 'reactstrap';
import {  fetchQuote  } from '../store/actions';

const ProgramQuote = props => {
    useEffect(() => {
        // calling the action creater here!
        props.fetchQuote()
    }, [])


    return (
        <div className='main-container'>
          <h1>Kanye Says...</h1>
          <div className='kanye'>
          {props.isFetching && (
          <Loader 
            type="Rings"
            color="#00BFFF"
            height={100}
            width={100}

          />
          )}
          {props.quote && <h3>"{props.quote}"</h3>}
          {props.error && <Alert className="error">{props.error}</Alert>}
          <Button color="warning" onClick={props.fetchQuote} >More Kanye</Button>
          </div>
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