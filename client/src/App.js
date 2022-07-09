import React from 'react';
import axios from 'axios';

import './App.css';



class App extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount() {
    this.getCvParse();
  };


  getCvParse = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!');
      })
      .catch(() => {
        alert('Error retrieving data!');
      });
  }

  componentDidMount = () => {
    this.getCvParse();
  };


  getCvParse = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };


    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server for processing');
        this.resetUserInputs();
        this.getCvParse();
      })
      .catch(() => {
        console.log('Internal server error 404!!');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  displayCvParse = (resumes) => {
    
    if (!resumes.length) return null; 

    return resumes.map((resumes, index) => (
      <div key={index} className="cv-parse__display">
        <h3>{resumes.title}</h3>
        <p>{resumes.body}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2>Welcome to the resume parser website</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              placeholder="body"
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            >
              
            </textarea>
          </div>

          <button>Submit</button>
        </form>

        <div className="cv-parse">
          {this.displayCvParse(this.state.posts)}
        </div>

    
      </div>
    );
  }
}


export default App;