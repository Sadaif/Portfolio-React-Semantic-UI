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
                {/* <List.Item as='a' href='#about'>About</List.Item> */}
                <List.Item as='a' href='#projects'>Portfolio</List.Item>
                <List.Item as='a' href='#contact'>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <HeaderComponent inverted={"inverted"} as='h4' content='Follow' /> 
              <FooterListComponent 
                as='a' href="https://www.facebook.com/sadaif.rizvi" name='facebook' title='Facebook'
              />
              <FooterListComponent 
                as='a' href="https://www.instagram.com/sadaif_rizvi/" name='instagram' title='Instagram'
              />
              <FooterListComponent 
                as='a' href="https://github.com/Sadaif"  name='github' title='Github'
              />
              <FooterListComponent 
                as='a' href="https://www.linkedin.com/in/sadaif-rizvi-a66621139/"  name='linkedin' title='Linkedin'
              />  
            </Grid.Column>
            <Grid.Column width={7}>
              <HeaderComponent inverted={"inverted"} as='h4' content='Sadaif Rizvi' />
              <p>
                @ 2020 DEVELOPED & DESIGNED IN PAKISTAN. <br /> <br />
                I can be reached anytime via my cell phone, ​ +92 324435585​ ​ or by email at
                sadaif.lahore@gmail.com​ .
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
