import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CounterActions } from '../actions/actionCreators';
import Counter from '../components/Counter';
import { StoreState } from '../reducers';
interface Props {
  value: number;
}

class CounterContainer extends React.Component<Props> {
  onIncrement = () => {
    CounterActions.increment();
  }
  onDecrement = () => {
    CounterActions.decrement();
  }
  onIncrementAsync = () => {
    CounterActions.incrementAsync();
  }
  onDecrementAsync = () => {
    CounterActions.decrementAsync();
  }
  render() {
    const { onIncrement, onDecrement, onIncrementAsync, onDecrementAsync } = this;
    const { value } = this.props;
    return (
      <>
        <div>
          <Link to="/">Home</Link>
        </div>
        <Counter
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onIncrementAsync={onIncrementAsync}
          onDecrementAsync={onDecrementAsync}
          value={value}
        />
      </>
    );
  }
}

export default connect(
  ({ counter }: StoreState) => ({
    value: counter.value,
  }),
  () => ({}),
)(CounterContainer);
