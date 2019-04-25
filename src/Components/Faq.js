import React from 'react';
import Button from './Button';

const faqbutton = 'Learn More';

const Faq = props =>  {
    return (
        <div className="faqwrapper">
        <h1>Frequently Asked Questions</h1>
        <Button buttontext={faqbutton}/>
        </div>
        )
}

export default Faq;