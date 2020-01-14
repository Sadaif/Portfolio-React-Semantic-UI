import React , {useState} from 'react';
import { 
  Container,  
  Icon,  
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Modal,
  Header,
  Button,
  Image 
} from 'semantic-ui-react'
import { ButtonComponent } from '../Components/Button';
import avatar from "../Images/Sadaif.jpg"
// import cv from "../Images/my-cv.pdf"
import { FooterListComponent } from '../Components/List'; 

//getWidth function
const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}
 

// this function handle desktop menu and header page
const DesktopContainer = (props) => {
  const [fixed , setFixed] = useState()
  const [open , setOpen] = useState(false)
  let show =  () => setOpen( true)
  let close = () => setOpen(false)

  function hideFixedMenu(){
    setFixed(!fixed)
  }
  function showFixedMenu(){
    setFixed({fixed: true})
  } 

  return (
    <React.Fragment >
      <Modal dimmer="blurring" basic open={open} onClose={close}>
          <Modal.Header>Hire Me</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src={avatar}
            />
            <Modal.Description>
              <Header style={{color: 'white'}}>Grab My CV to find out more about me.</Header>
              <p>
                I figure out the process of designing,  
                writing,testing,debugging/troubleshooting and  
                maintaining the source code of computer programs.
                Skilled in HTML5 ,CSS,React.js,Redux,React Native
                and MySQL . Collaborating and working in a team
                environment via github.
              </p>
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
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={close}>
              Cancel
            </Button>
            <a href="https://www.slideshare.net/SyedSadaifRizvi/cv-219734198" download>
              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content="Download"
                onClick={close}
              />
            </a>
          </Modal.Actions>
        </Modal>

      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
        <Segment
          inverted
          textAlign='center' 
          vertical  
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item as='a' active href="/"> Home </Menu.Item> 
              <Menu.Item as='a' href='#projects'> Portfolio </Menu.Item>
              <Menu.Item as='a' href='#contact'> Contact </Menu.Item>

              <Menu.Item position='right'> 
                  <ButtonComponent onClick={() => show('blurring')} title='Hire Me' as='a'  style={{ marginLeft: '0.5em' }}/>   
              </Menu.Item>
            </Container>
          </Menu> 
        </Segment> 
        </Visibility>

        {props.children}
      </Responsive>
    </React.Fragment>
  )
}


// this function handle mobile responsive design 
const MobileContainer = (props) => {
  
  // const [fixed ] = useState() 
  const [sidebarOpened , setsidebarOpened ] = useState()
  function handleSidebarHide(){
    setsidebarOpened(!sidebarOpened)
  }
  function handleToggle(){
    setsidebarOpened({sidebarOpened: true})
  } 

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
    <Sidebar
      as={Menu}
      animation='push'
      inverted
      onHide={handleSidebarHide}
      vertical
      visible={sidebarOpened}
    >
      <Menu.Item as='a' active href="/"> Home </Menu.Item> 
      <Menu.Item as='a' href='#projects'> Portfolio </Menu.Item>
      <Menu.Item as='a' href='#contact'> Contact </Menu.Item> 
    </Sidebar>

    <Sidebar.Pusher dimmed={sidebarOpened}>
      <Segment
        inverted
        textAlign='center'
        
        vertical
      >
        <Container>
          <Menu inverted pointing secondary size='large'>
            <Menu.Item onClick={handleToggle}>
              <Icon name='sidebar' />
            </Menu.Item>
            <Menu.Item position='right'> 
              <a href="https://www.slideshare.net/SyedSadaifRizvi/cv-219734198" download>
              <ButtonComponent title='Hire Me' as='a'  style={{ marginLeft: '0.5em' }}/> 
              </a>
            </Menu.Item>
          </Menu>
        </Container> 
      </Segment>
     
      {props.children}
    </Sidebar.Pusher>
    </Responsive>
  )
}

  

const Nav = ({children}) => {
  return (
    <React.Fragment>
     <DesktopContainer>{children}</DesktopContainer>
     <MobileContainer>{children}</MobileContainer>
    </React.Fragment>
  );
}

export default Nav;
