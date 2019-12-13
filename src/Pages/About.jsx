import React from 'react';
import logo from '../Project_Images/programmer.gif';

import {  
  Grid,  
} from 'semantic-ui-react'
import { HeaderComponent } from '../Components/Header';
import { DevImageComponent } from '../Components/Grid';

const About = () => {
  return ( 
    <section id="about" style={{marginTop: '35%'}}>

      <DevImageComponent src={logo}   /> 
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <HeaderComponent as='h2' color='red' title="Who's this guy?" />
            </Grid.Column>  
          </Grid.Row>  
          <Grid.Row>
            <Grid.Column>
              <HeaderComponent as='h2' title='My name is Sadaif Rizvi.' />
              <HeaderComponent as='h4' title='I am a web developer and UX designer based in Pakistan' />
              <HeaderComponent as='h4' title="I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better. I also love photography, a hobby
                I'm taking along since the good old film cameras. Oh, and rice with milk; I have a
                passion for rice with milk!" />
            </Grid.Column>  
          </Grid.Row>    
        </Grid>

        <br /><br /><br />

      <Grid container columns={2} textAlign='center'> 
        <Grid.Row>
          <Grid.Column>
            <HeaderComponent as='h2' color='orange' title='What does he do?' />
          </Grid.Column>  
        </Grid.Row> 
        
        <Grid.Column>
          <HeaderComponent as='h2'  title="I'm a programmer." />
          <HeaderComponent as='h4' title="For the front-end I usually work with Javascript, either standalone or including
            popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
            CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
            For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of
            course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc)." /> 
        </Grid.Column>
        
        <Grid.Column>
          <HeaderComponent as='h2'  title="Also a designer." />
          <HeaderComponent as='h4'  title="I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
            Lightroom or Xd are some kind of industry standards and I love working with them. I'm
            not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
            that I've been working with.
            User interfaces, brochures, books, branding... You name it! As I mentioned, creating
            pretty things is particularly important for me." />  
        </Grid.Column> 
      </Grid>
 
    </section> 
  );
}

export default About;
