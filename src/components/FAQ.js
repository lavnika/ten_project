import React from 'react';
import './FAQ.css';
import Accordion from 'react-bootstrap/Accordion'


function Accordions() {
  return (
    <div className="accordions">

        <h2>Frequently Asked Questions</h2>
        

    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0" className="accordion-item">
    <Accordion.Header>What is The Entrepreneurship Network (TEN) ?</Accordion.Header>
    <Accordion.Body>
    The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning and expertise. Our current customer segment, at present, stands at 500+ colleges and 15000+ students, with new institutions coming in all the time.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    <Accordion>
  <Accordion.Item eventKey="0" className="accordion-item">
    <Accordion.Header>Why do I join TEN ?</Accordion.Header>
    <Accordion.Body>
    TEN would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>

    </div>
  );
}

export default Accordions;