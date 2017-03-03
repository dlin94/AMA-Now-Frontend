import React, {Component} from 'react';

class ScheduleRow extends Component {
  constructor(props) {
    super(props);
  }

  renderColumns() {
    const dt = new Date(this.props.date).toUTCString();
    const person = this.props.person;
    const date = dt.split(" ").slice(1, 4).join(" ");
    const time = dt.split(" ")[4].split(":").slice(0,2).join(":");

    return (
      <tr>
        <td className="colperson">{person}</td>
        <td className="coldate">{date}</td>
        <td className="coltime">{time}</td>
      </tr>
    );
  }

  render() {
    return this.renderColumns();
  }
}

export default ScheduleRow;
