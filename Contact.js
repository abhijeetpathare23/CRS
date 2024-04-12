import React from 'react'
import Abhi from "./assets/Abhi1.jpg"
import Sonali from "./assets/Sonali.jpg"
import Sakshi from "./assets/Sakshi.jpg"
import Kaif from "./assets/Kaif.jpg"
import Card from 'react-bootstrap/Card';
import  './contact.css';

function Contact() {
  return (
  <>
    <Card style={{ width: '18rem', display:"flex", alignItems:"center",textAlign:'center',marginLeft:'485px'}}>
      <Card.Img     src={Abhi} alt='Abhi'  />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Abhijit Pathare</Card.Title>
        <Card.Text style={{color:'white'}}>
          Team Leader
        </Card.Text>
       
      </Card.Body>
    </Card>

<div className='Head'>
  <h3>Our Developers</h3>
</div>
<div class='row'>
<Card style={{ width: '18rem', display:"flex", alignItems:"center",marginLeft:'165px'}}>
      <Card.Img     src={Sonali} alt='Sonali' style={{width:'288px',height:'289px'}}/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Sonali Thorat</Card.Title>
        <Card.Text style={{color:'white'}}>
          Software Developer
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card><br/>


    <Card style={{ width: '18rem', display:"flex", alignItems:"center",marginLeft:'50px',marginRight:'50px'}}>
      <Card.Img     src={Sakshi} alt='Sakshi' style={{width:'288px',height:'288px'}} />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Sakshi Wakchaure</Card.Title>
        <Card.Text style={{color:'white'}}>
          Software Developer
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card><br/>


    <Card style={{ width: '18rem', display:"flex", alignItems:"center"}}>
      <Card.Img     src={Kaif} alt='Kaif' style={{width:'288px',height:'288px'}} />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Kaif Sayyed</Card.Title>
        <Card.Text style={{color:'white'}}>
          Software Developer
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

  </div>
    </>
  );
}

export default Contact;


