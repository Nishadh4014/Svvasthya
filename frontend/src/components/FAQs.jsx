import React, { useState } from 'react';
import './styles/FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1>FAQs</h1>
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{activeIndex === index ? '×' : '+'}</span> Lorem Ipsum Dolor Sit Amet?
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
