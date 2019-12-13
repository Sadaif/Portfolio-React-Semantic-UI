import React from 'react';
import { Segment , Container , Grid  , List } from 'semantic-ui-react';
import { HeaderComponent } from '../Components/Header';
import { FooterListComponent } from '../Components/List';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <HeaderComponent inverted={"inverted"} as='h4' content='Menu' /> 
              <List link inverted> 
                <List.Item as='a' href='/'>Home </List.Item>
                <List.Item as='a' href='#about'>About</List.Item>
                <List.Item as='a' href='#portfolio'>Portfolio</List.Item>
                <List.Item as='a' href='#contact'>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <HeaderComponent inverted={"inverted"} as='h4' content='Follow' /> 
              <FooterListComponent 
                as='a'  name='facebook' title='Facebook'
              />
              <FooterListComponent 
                as='a'  name='instagram' title='Instagram'
              />
              <FooterListComponent 
                as='a'  name='github' title='Github'
              />
              <FooterListComponent 
                as='a'  name='linkedin' title='Linkedin'
              />  
            </Grid.Column>
            <Grid.Column width={7}>
              <HeaderComponent inverted={"inverted"} as='h4' content='Sadaif Rizvi' />
              <p>
                @ 2020 DEVELOPED & DESIGNED IN PAKISTAN.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
