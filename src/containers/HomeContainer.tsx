import * as React from 'react';
import { Link } from 'react-router-dom';

class HomeContainer extends React.Component<{}> {
  render() {
    return (
      <>
        <div>
          Welcome to my paradise!
        </div>
        <div>
          <Link to="/counter">Go to Counter</Link>
        </div>
        <div>
          <Link to="/todos">Go to Todos</Link>
        </div>
      </>
    );
  }
}

export default HomeContainer;
