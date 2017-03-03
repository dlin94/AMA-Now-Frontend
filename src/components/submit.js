import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import axios from 'axios';
import Select from 'react-select';
import Schedule from './schedule';
import 'react-select/dist/react-select.css';

class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      ama: '',
      question: '',
      allow: true,
      options: [],
    };

    this.onAMAChange = this.onAMAChange.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const query = this.props.location.query;
    console.log()

    // Only load page if we're coming from Reddit authorization page
    if ((query.code === undefined || query.code.length != 27) || query.state !== "randomstring") {
      this.setState( {allow: false });
    } else {
      this.setState({ code: this.props.location.query.code });
    }
  }

  componentDidMount() {
    // Get the schedule of AMAs from server
    axios.get('http://127.0.0.1:6500/api/schedule')
    .then((response) => {
      const data = response.data.sort((a,b) => {
        return new Date(a.date) - new Date(b.date);
      })
      .map(ama => {
        return { label: ama.people.join(", "), value: ama.people.join(", "), date: ama.date };
      });
      this.setState({options: data});
      console.log(this.state.options);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  onAMAChange(event) {
    this.setState({ ama: event.value });
  }

  onQuestionChange(event) {
    this.setState({ question: event.target.value });
  }

  onSubmit(event) {
    console.log(this.state.code);
    console.log(this.state.ama);
    console.log(this.state.question);

    // Ensure proper submission
    if (this.state.ama == '') {
      document.getElementById('errmessage').innerHTML = "Please select an AMA!";
    } else if (this.state.question == '') {
      document.getElementById('errmessage').innerHTML = "Please ask a question!";
    } else if (!this.state.question.includes("?")) {
      document.getElementById('errmessage').innerHTML = "Your comment must contain a question!";
    } else {
      // Send to server
      axios.post('http://127.0.0.1:6500/api/comment', {
        code: this.state.code,
        ama: this.state.ama,
        question: this.state.question
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
      browserHistory.push('/confirmation');
    }
  }

  showError() {
    return(
      <div>Error getting page.</div>
    );
  }

  showForm() {
    return(
      <div id="submit">
        <div id="form">
          <h1>AMA of interest:</h1>
          <Select options={this.state.options} searchable={false} clearable={false} value={this.state.ama} onChange={this.onAMAChange} placeholder="Select an AMA"/>
          <h1>Question to ask:</h1>
          <textarea id="q" placeholder='Type your question here.' onChange={this.onQuestionChange}/>
          <button id="subbutton" type="button" onClick={this.onSubmit}>
            Submit
          </button>
          <p id="errmessage"></p>
        </div>
        <Schedule
          options={this.state.options}
        />
      </div>
    );
  }

  render() {
    if (this.state.allow)
      return this.showForm();
    else
      return this.showError();
  }
}

export default Submit;
