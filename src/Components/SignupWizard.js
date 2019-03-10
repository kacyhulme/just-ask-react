import React, { Component } from 'react';
import WizardQuestions from './WizardQuestions';

class SignupWizard extends Component {
  constructor(props) {
    super(props);
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
    const completed = true;

    this.state.data.filter(function(each){
      if(each.id == id) {
        each.answer = answer; 
        each.isCompleted = completed;
      }
    })

    this.setState({ 
      answer: answer,
      isCompleted: completed 
    });
  };
  
  handleSubmit = e => {
    //alert('A name was submitted: ' + this.state.name);
    debugger
    e.preventDefault();
  }

  render() {

    const data = this.state.data.map((data, key) =>
            <div className="Question">
              <p>{ data.question }</p>
              <input 
                key={ data.id }
                type="text" 
                name={ data.id }
                onChange={ this.handleAnswerInput }>
              </input>
            </div>  
    );

    return (
        <div className="Chatwizard">
          <div>Chat wizard </div>
         
          <div className="Questionwrapper">
            <form onSubmit={this.handleSubmit}>
              { data }
            </form>
            <input type="submit" value="Submit" /> 
          </div>
        
        </div>
    );
  }
}
export default SignupWizard;


