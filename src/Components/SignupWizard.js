import React, { Component } from 'react';
import WizardQuestions from './WizardQuestions';

class SignupWizard extends Component {
  constructor(props) {
    super(props);
    this.state
    this.state = {
        data: 
        [{
        id: 1,
        question:"What is your name?",
        answer: null,
        next: 2, 
        isCompleted:false
        },{
        id: 2,
        question:"Do you like dogs?",
        answer: null,
        next: 3, 
        isCompleted:false
        },{
        id: 3,
        question:"In what city do you live?",
        answer: null,
        next: 4, 
        isCompleted:false
        },{
        id: 4,
        question:"What is your favorite season?",
        answer: null,
        next: null, 
        isCompleted:false
        }],
        name: "Greta"
      };
  }

  handleAnswerInput = e => {
    const target = e.target;
    const id = target.name;
    const answer = e.target.value

    this.state.data.filter(function(each){
      if(each.id == id) {
        each.answer = answer; 
      }
    })

    this.setState({ 
      answer: answer 
    });
  };
  
  handleSubmit = e => {
    //alert('A name was submitted: ' + this.state.name);
    e.preventDefault();
  }

  render() {

    const data = this.state.data.map((data, key) =>
        
        <div className="Questionwrapper">
          <form onSubmit={this.handleSubmit}>
            <p>{ data.question }</p>
            <input 
            key={ data.id }
            type="text" 
            name={ data.id }
            onChange={ this.handleAnswerInput }>
            </input>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );

    return (
        <div className="Chatwizard">
          <div>Chat wizard </div>
          {/*<form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            value={this.state.name}
            onChange={ this.handleAnswerInput }>
            </input>
            <input type="submit" value="Submit" />
          </form>*/}
          <div>

            { this.state.name }

          </div>

            { data }

        </div>
    );
  }
}
export default SignupWizard;


