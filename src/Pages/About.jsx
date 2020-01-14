import React from 'react';
import logo from '../Project_Images/programmer.gif';

import {  
  Grid,  
} from 'semantic-ui-react'
import { HeaderComponent } from '../Components/Header';
import { DevImageComponent } from '../Components/Grid';

const About = () => {
  return ( 
    <section>

      <DevImageComponent src={logo}   /> 
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column computer={16} mobile={16}>
              <HeaderComponent as='h2' color='red' title="Who's this guy?" />
            </Grid.Column>  
          </Grid.Row>   
          <Grid.Row >
            <Grid.Column computer={7} mobile={16}>
              <HeaderComponent as='h2' title='My name is Sadaif Rizvi.' />
              <HeaderComponent as='h4' title='I am a web developer and UX designer based in Pakistan' />
              <p>I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better.  Building state-of-the-art, easy to use, user-friendly websites and applications is
                truly a passion of mine and I am confident I would be an excellent addition to
                your organization. In addition to my knowledge base, I actively seek out new
                technologies and stay up-to-date on industry trends and advancements. This
                has allowed me to stay ahead of the curve and deliver exceptional work to all
                of my employers, including those I've worked for on a project basis .</p> 
            </Grid.Column>  
          </Grid.Row>    
        </Grid>

        <br /><br /><br />

      <Grid container columns={2} textAlign='center'> 
        <Grid.Row>
          <Grid.Column computer={16} mobile={16}>
            <HeaderComponent as='h2' color='orange' title='What does he do?' />
          </Grid.Column>  
        </Grid.Row> 
        
        <Grid.Column computer={8} mobile={16}>
          <HeaderComponent as='h2'  title="About me" />
          <p>I figure out the process of designing,  
            writing,testing,debugging/troubleshooting and  
            maintaining the source code of computer programs.
            Skilled in HTML5 , CSS, React.js, Redux, React Native
            and MySQL . Collaborating and working in a team
            environment via github.</p> 
        </Grid.Column>
        
        <Grid.Column computer={8} mobile={16}>
          <HeaderComponent as='h2'  title="I'm a programmer." />
          <p>For the front-end I usually work with Javascript, either standalone or including
            popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
            CSS and, whenever needed, any of their friends: Bootstrap, Semantic UI React, etc. </p>  
        </Grid.Column> 
      </Grid>
 
    </section> 
  );
}

export default About;
