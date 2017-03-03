import React, {Component} from 'react';
import { Link } from 'react-router';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <h1>Post scheduled!</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Confirm;
