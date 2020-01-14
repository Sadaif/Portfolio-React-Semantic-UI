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
     <Grid textAlign='center' columns={3} >
        <Grid.Row>
          <Grid.Column computer={7} mobile={16}>
            <HeaderComponent as='h2' color='pink' title='My Works' />
            <p>Here's a list of most of the projects I've been working on lately. All of these were built during my coding camp adventure , 
              where I've been coding non-stop until I completed all the projects.</p>
          </Grid.Column>  
        </Grid.Row>   
      </Grid>

      <Grid container    columns={4}>   
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card
              image={country}
              header='Country Box.'
              meta='Built using React.js and CSS.'
              description='This is a Country Box Site that I made which lets the users read .....'
              extra={extra[0]}  
            /> 
        </Grid.Column> 
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card
            image={recipe}
            header='recipe list.'
            meta='Built using React.js and CSS.'
            description='This is a Recipe List website that I made React.Js.'
            extra={extra[1]}  
          />
        </Grid.Column>  
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card
              image={calculator}
              header='scientific Calculator.'
              meta='Built using React , Redux and CSS.'
              description='This is a Calculator that I made with react and redux.'
              extra={extra[2]}  
            />  
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card
          image={searchImage}
          header='React Search images.'
          meta='Built using React.js , Restfull Api '
          description='This is a React Search Images website that I made which lets ....'
          extra={extra[3]}  
          />  
        </Grid.Column>  
        <Grid.Column mobile={16} tablet={8} computer={4}> 
          <Card
            image={todo}
            header='Todo.'
            meta='Built React.js , Redux and CSS.'
            description='This is a simple todo application that I made React and Redux .'
            extra={extra[4]}  
            /> 
        </Grid.Column>    
        <Grid.Column mobile={16} tablet={8} computer={4}> 
         <Card
            image={digital}
            header='Digital-Cru Websoft.'
            meta='Built using React.js , React Router .'
            description='This is a Digital-Cru Websoft website that I made React.Js.'
            extra={extra[5]}  
          /> 
        </Grid.Column>  
        <Grid.Column mobile={16} tablet={8} computer={4}> 
         <Card
            image={death}
            header='Death Timer'
            meta='Built using React.js , Redux and CSS.'
            description='This is a Death-Timer website that I made with React and Redux .'
            extra={extra[6]}  
          />    
        </Grid.Column>
        </Grid> 
    </section>
  );
}

export default Projects;
