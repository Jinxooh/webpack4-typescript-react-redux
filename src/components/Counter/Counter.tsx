import * as React from 'react';
import { FormattedMessage, InjectedIntl, injectIntl } from 'react-intl';

interface Props {
  intl?: InjectedIntl;
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

const Counter: React.SFC<Props> = ({ intl, value, onIncrement, onDecrement }) => (
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
  </div>
);

export default injectIntl(Counter);
