import React, { Component } from 'react';
import SignupWizardQuestions from './SignupWizardQuestions';

class SignupWizard extends Component {
  state = {
      currentStep: 1,
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
      isCompleted: completed,
      currentStep: this.state.currentStep++
    });
  };
  
  handleSubmit = e => {
    if(this.state.currentStep === 4) {
      //need to decide what to do when person is done answering all the questions here
      this.setState({ 
        currentStep: 1,
        answer: null,
        isCompleted: false
      })
    } else {
      this.setState({ 
        currentStep: this.state.currentStep + 1
      });
      e.preventDefault();  
    }
  }

  render() {

    const data = this.state.data.map((data, key) =>
            <div key={data.id} className="Question" style={{display: (this.state.currentStep >= data.id ? 'block': 'none')}}>
              <p>{ data.question }</p>
              <input 
                type="text" 
                name={ data.id }
                onChange={ this.handleAnswerInput }>
              </input>
            </div>  
    );

    return (
        <div className="chatwizard">
          <div>Chat wizard </div>
         
          <div className="questionwrapper">
            <form onSubmit={this.handleSubmit}>
              
              <SignupWizardQuestions questions= { data }/>

            <input type="submit" value="Submit" /> 
            </form>
          </div>
        
        </div>
    );
  }
}
export default SignupWizard;


