import * as React from 'react';
import { FormattedMessage, InjectedIntl, injectIntl } from 'react-intl';

interface Props {
  intl?: InjectedIntl;
  value: number;
  onIncrement(): void;
  onDecrement(): void;
  onIncrementAsync(): void;
  onDecrementAsync(): void;
}

const Counter: React.SFC<Props> = ({ intl, value, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync }) => (
  <div>
    <h2><FormattedMessage id="hello" /></h2>
    <div>
      {intl.formatMessage({
        id: 'goodbye',
      })}
    </div>
    <h3>{value}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <h3>Async</h3>
    <button onClick={onIncrementAsync}>+</button>
    <button onClick={onDecrementAsync}>-</button>
  </div>
);

export default injectIntl(Counter);
