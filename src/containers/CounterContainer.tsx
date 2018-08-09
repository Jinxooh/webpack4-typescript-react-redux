import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CounterActions } from "../actions/actionCreators";
import { PostActions } from "../actions/actionCreators";
import Counter from "../components/Counter";
import { StoreState } from "../reducers";

interface Props {
  value: number;
  title: string;
  body: string;
  loading: boolean;
  error: boolean;
}

class CounterContainer extends React.Component<Props> {
  componentDidMount() {
    const { value } = this.props;
    PostActions.getPost(value);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.value !== nextProps.value) {
      PostActions.getPost(nextProps.value);
    }
  }

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
    const {
      onIncrement,
      onDecrement,
      onIncrementAsync,
      onDecrementAsync,
    } = this;
    const { value, title, body, error, loading } = this.props;
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
        {loading && <h2>로딩중...</h2>}
        {error ? (
          <h1>에러발생!</h1>
        ) : (
          <div>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        )}
      </>
    );
  }
}

export default connect(
  ({ counter, post }: StoreState) => ({
    value: counter.value,
    title: post.data.title,
    loading: post.pending,
    body: post.data.body,
    error: post.error,
  }),
  () => ({}),
)(CounterContainer);
