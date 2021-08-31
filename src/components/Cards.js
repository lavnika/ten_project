import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardImg from 'react-bootstrap/CardImg';
import { Button } from './Button';



function Cards() {
  return (
    <div className="cards">
     
<Card className="bg-dark text-white">

  <Card.Img src="images/img-3.jpg" alt="Card image" />
   
  <Card.ImgOverlay>
    <Card.Text className="main-text">
      A World of Knowledge at Your Fingertips
    </Card.Text>
    <div className='hero-btns'>
      
      <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        onClick={console.log('hey')}
      >
        OUR COURSES
      </Button>
    </div>
  </Card.ImgOverlay>
</Card>





<h2>Our Courses</h2>
<CardGroup className="card_group">
  <Card>
    <Card.Img variant="top" src="images/img-21.jpg" />
    <Card.Body>
      <Card.Title>Sales: Internship + Training + Career Counselling + Resume & LinkedIn Profile</Card.Title>
      <Card.Text>RS. 200.00
      </Card.Text>

    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="images/img-22.jpg" />
    <Card.Body>
      <Card.Title>Full Stack Development(Angular/Firebase/Java)</Card.Title>
      <Card.Text>RS. 2,927.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/img-23.jpg" />
    <Card.Body>
      <Card.Title>Human Resource:Internship+Training+Career Counselling+Resume&LinkedIn Profile</Card.Title>
      <Card.Text>RS. 200.00
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

<h2>Our Course Benefits</h2>


<CardGroup className="card_group">
  <Card>
    <Card.Img variant="top" src="images\img-24.jpg" />
    <Card.Body>
      <Card.Title>Expert Teachers</Card.Title>
      <Card.Text>
      Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/img-25.jpg" />
    <Card.Body>
      <Card.Title>Online Community</Card.Title>
      <Card.Text>
      Feel like home, with a "family of invisible friends".{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/img-26.jpg" />
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>Flexible Curriculum</Card.Title>
      <Card.Text>
      Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

    </div>
  );
}

export default Cards;
