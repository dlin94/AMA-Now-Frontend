import React, {Component} from 'react';
import ScheduleRow from './schedule-row';

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Person</td>
            <td>Date</td>
            <td>Time (GMT)</td>
          </tr>
        </thead>
        <tbody>
          {this.props.options.map((obj, i) => {
            return (<ScheduleRow key={i} person={obj.label} date={obj.date}/>);
          })}
        </tbody>
      </table>
    );
  }
}

export default Schedule;
