import React, { Component } from 'react';
import { connect } from "react-redux";
// connect is a function that is used on a component to return a HOC

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from "../../store/actions";
class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr.toFixed(2)} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 12" clicked={this.props.onAdditionCounter} />
                <CounterControl label="Subtract 12" clicked={this.props.onSubtractionCounter} />
                <CounterControl label="Multiply 5" clicked={this.props.onMultiplyCounter} />
                <CounterControl label="Divide 7" clicked={this.props.onDivideCounter} />

                <br />

                <button onClick={this.props.onSaveResult}>Save Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onRemoveResult(strResult.id)}> {strResult.value.toFixed(2)} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
};
// This will store a function with expects state stored in redux as the input and returns a JS object which is a map of prop names and slices of the stored state

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdditionCounter: () => dispatch({ type: actionTypes.ADD, value: 12 }),
        onSubtractionCounter: () => dispatch({ type: actionTypes.SUB, value: 12 }),
        onMultiplyCounter: () => dispatch({ type: actionTypes.MULTIPLY, value: 5 }),
        onDivideCounter: () => dispatch({ type: actionTypes.DIVIDE, value: 7 }),
        onSaveResult: () => dispatch({ type: actionTypes.SAVE_RESULT }),
        onRemoveResult: (id) => dispatch({ type: actionTypes.REMOVE_RESULT, resultElId: id })
        // onRemoveResult expects the id of the specific element which can then be used to immutably remove an element from the results array
    };
};
// Dispatch is a helper function from the react-redux package that gives access to the store behind the scenes.
// Remember that the type must always be a CAPITALIZED STRING; This is mainly because that's the general convention
// These dispatches should be considered as props which is reflected in the counter control
// Aside from type, remember that you can pass additional fields (typically it's something called payload, but we can just use value here)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);