import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

class HomeContainer extends React.Component<Props> {
  render() {
    return (
      <>
        <div>
          Welcome to my paradise!
        </div>
        <Link to="/counter">Go to Counter</Link>
      </>
    );
  }
}

export default HomeContainer;
