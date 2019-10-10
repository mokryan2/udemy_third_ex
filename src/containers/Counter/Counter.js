import React, { Component } from 'react';
import { connect } from "react-redux";
// connect is a function that is used on a component to return a HOC

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from "../../store/actions/index";
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

                <button onClick={() => this.props.onSaveResult(this.props.ctr)}>Save Result</button>
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
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};
// This will store a function with expects state stored in redux as the input and returns a JS object which is a map of prop names and slices of the stored state

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAdditionCounter: () => dispatch(actionCreators.add(12)),
        onSubtractionCounter: () => dispatch(actionCreators.sub(12)),
        onMultiplyCounter: () => dispatch(actionCreators.multiply(5)),
        onDivideCounter: () => dispatch(actionCreators.divide(7)),
        onSaveResult: (result) => dispatch(actionCreators.saveResult(result)),
        onRemoveResult: (id) => dispatch(actionCreators.removeResult(id))
        // onRemoveResult expects the id of the specific element which can then be used to immutably remove an element from the results array
    };
};
// Dispatch is a helper function from the react-redux package that gives access to the store behind the scenes.
// Remember that the type must always be a CAPITALIZED STRING; This is mainly because that's the general convention
// These dispatches should be considered as props which is reflected in the counter control
// Aside from type, remember that you can pass additional fields (typically it's something called payload, but we can just use value here)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);