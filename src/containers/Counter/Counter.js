import React, { Component } from 'react';
import { connect } from "react-redux";
// connect is a function that is used on a component to return a HOC

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 12" clicked={this.props.onAdditionCounter} />
                <CounterControl label="Subtract 12" clicked={this.props.onSubtractionCounter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};
// This will store a function with expects state stored in redux as the input and returns a JS object which is a map of prop names and slices of the stored state

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAdditionCounter: () => dispatch({ type: "ADD" }),
        onSubtractionCounter: () => dispatch({ type: "SUB" })
    };
};
// Dispatch is a helper function from the react-redux package that gives access to the store behind the scenes.
// Remember that the type must always be a CAPITALIZED STRING; This is mainly because that's the general convention
// These dispatches should be considered as props which is reflected in the counter control

export default connect(mapStateToProps, mapDispatchToProps)(Counter);