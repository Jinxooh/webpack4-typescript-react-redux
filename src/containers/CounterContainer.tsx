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
  render() {
    const { onIncrement, onDecrement } = this;
    const { value } = this.props;
    return (
      <>
        <div>
          <Link to="/">Home</Link>
        </div>
        <Counter
          onIncrement={onIncrement}
          onDecrement={onDecrement}
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
