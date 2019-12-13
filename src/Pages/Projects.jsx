import React from 'react';
import { 
  Card, 
  Grid, 
} from 'semantic-ui-react'

import country from '../Project_Images/country-box.png'
import calculator from '../Project_Images/calculator.png'
import searchImage from '../Project_Images/search-image.png'
import todo from '../Project_Images/todo.png'
import death from '../Project_Images/death.png'
import digital from '../Project_Images/digital-cru.png'
import recipe from '../Project_Images/recipe.png'
import { HeaderComponent } from '../Components/Header';

const extra = [
  <a href='http://country-box.surge.sh/' rel="noopener noreferrer" >Try Live</a>,
  <a href='http://recipe-list.surge.sh/' rel="noopener noreferrer">Try Live</a>,
  <a href='http://scientific.surge.sh/' rel="noopener noreferrer">Try Live</a>,
  <a href='http://image-search.surge.sh/' rel="noopener noreferrer">Try Live</a>,
  <a href='http://todo-redux.surge.sh/' rel="noopener noreferrer">Try Live</a>,
  <a href='http://websoft.surge.sh/' rel="noopener noreferrer">Try Live</a>,
  <a href='http://death-timer.surge.sh/' rel="noopener noreferrer">Try Live</a>,
]  

const Projects = () => {
  return (
    <section style={{marginTop: '12em'}} id="projects">
      <br/><br/><br/>
     <Grid textAlign='center' columns={3}>
        <Grid.Row>
          <Grid.Column>
            <HeaderComponent as='h2' color='pink' title='My Works' />
            <HeaderComponent as='h4' title="Here's a list of most of the projects I've been working on lately. All of these were built during my coding camp adventure , 
              where I've been coding non-stop until I completed all the projects." />
          </Grid.Column>  
        </Grid.Row>   
      </Grid>

      <Grid container   textAlign='center'> 
        <Grid.Column>
        <Card.Group itemsPerRow={3}>
        <Card
            image={country}
            header='Country Box.'
            meta='Built using React.js and CSS.'
            description='This is a Country Box Site that I made which lets the users read , search and know about Religions , Languages , Population and Flags of all Countries.'
            extra={extra[0]}  
          />  <Card
            image={recipe}
            header='recipe list.'
            meta='Built using React.js and CSS.'
            description='This is a Recipe List website that I made React.Js.'
            extra={extra[1]}  
          />  <Card
            image={calculator}
            header='scientific Calculator.'
            meta='Built using React , Redux and CSS.'
            description='This is a Calculator that I made with react and redux.'
            extra={extra[2]}  
          />  <Card
            image={searchImage}
            header='React Search Engine for images.'
            meta='Built using React.js , Restfull Api and CSS'
            description='This is a React Search Images website that I made which lets the users search images in different categories . Basically i use Api with react.'
            extra={extra[3]}  
          />  <Card
            image={todo}
            header='Todo.'
            meta='Built React.js , Redux and CSS.'
            description='This is a simple todo application that I made React and Redux .'
            extra={extra[4]}  
          />  <Card
            image={digital}
            header='Digital-Cru Websoft.'
            meta='Built using React.js , React Router and CSS.'
            description='This is a Digital-Cru Websoft website that I made React.Js.'
            extra={extra[5]}  
          />  <Card
            image={death}
            header='Death Timer'
            meta='Built using React.js , Redux and CSS.'
            description='This is a Death-Timer website that I made with React and Redux .'
            extra={extra[6]}  
          />   
        </Card.Group>
        </Grid.Column> 
        </Grid> 
    </section>
  );
}

export default Projects;
