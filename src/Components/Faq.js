import React from 'react';
import Button from './Button';

const faqbutton = 'faq button';

const Faq = props =>  {
    return (
        <div className="faqwrapper">
        <div>Frequently Asked Questions</div>
        <Button buttontext={faqbutton}/>
        </div>
        )
}

export default Faq;