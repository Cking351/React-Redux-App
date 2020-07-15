import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import {  newQuote  } from './store/actions';

const programQuote = props => {
    useEffect(() => {
        props.newQuote()
    }, [])
}