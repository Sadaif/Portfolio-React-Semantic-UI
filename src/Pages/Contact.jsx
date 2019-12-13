import React from 'react';
import {Container} from 'semantic-ui-react'
import MainForm from './Contact_Pages/MainForm';

const Contact = () => {
  return (
    <section style={{marginTop: '12em' , margin: '2em'}} id="contact" > 
      <Container textAlign='center' id="contact">
        <MainForm />
      </Container>   
    </section>
  );
}

export default Contact;
