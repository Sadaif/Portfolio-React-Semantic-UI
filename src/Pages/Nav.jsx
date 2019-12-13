import React , {useState} from 'react';
import { 
  Container, 
  Reveal,
  Icon,  
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Image
} from 'semantic-ui-react'

// images imports
import dafi from '../Project_Images/dafi.jpg'
import desk from '../Project_Images/desk.jpg'
import { ButtonComponent } from '../Components/Button';
let devAvatar = 'https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png';


//getWidth function
const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


// HomePage heading functions
const HomepageHeading = ({ mobile }) => (
  <header>
    <div>
      <Image src={desk} fluid  /> 
        <div style={{'marginTop': mobile ? '-11em' : '-50em' , marginLeft: '70%'}}>
          <Reveal animated="move right">

            <Reveal.Content visible>
              <Image circular size={ mobile ? 'tiny' : 'small'}  verticalAlign='middle' src={devAvatar} />
            </Reveal.Content>

            <Reveal.Content hidden  > 
                <Image circular size={ mobile ? 'tiny' : 'small'} src={dafi} />
            </Reveal.Content>

          </Reveal> 
        </div> 
    </div>
  </header>
)
 

// this function handle desktop menu and header page
const DesktopContainer = (props) => {
  const [fixed , setFixed] = useState()
  function hideFixedMenu(){
    setFixed(!fixed)
  }
  function showFixedMenu(){
    setFixed({fixed: true})
  } 

  return (
    <React.Fragment >
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
              <Menu.Item as='a' href="#about"> About </Menu.Item>
              <Menu.Item as='a' href='#projects'> Portfolio </Menu.Item>
              <Menu.Item as='a' href='#contact'> Contact </Menu.Item>

              {/* <Menu.Item position='right'>
                <ButtonComponent title='Log in' as='a' inverted={!fixed} />
                <ButtonComponent title='Sign Up' as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}/> 
              </Menu.Item> */}
            </Container>
          </Menu> 
        </Segment>

          {/* Home page heading component ------- */}

          <HomepageHeading />
        
        </Visibility>

        {props.children}
      </Responsive>
    </React.Fragment>
  )
}


// this function handle mobile responsive design 
const MobileContainer = (props) => {
  
  const [fixed ] = useState() 
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
      <Menu.Item as='a' href="#about"> About </Menu.Item>
      <Menu.Item as='a' href='#projects'> Portfolio </Menu.Item>
      <Menu.Item as='a' href='#contact'> Contact </Menu.Item>
      {/* <Menu.Item as='a'>Log in</Menu.Item>
      <Menu.Item as='a'>Sign Up</Menu.Item>  */}
    </Sidebar>

    <Sidebar.Pusher dimmed={sidebarOpened}>
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 350, padding: '1em 0em' }}
        vertical
      >
        <Container>
          <Menu inverted pointing secondary size='large'>
            <Menu.Item onClick={handleToggle}>
              <Icon name='sidebar' />
            </Menu.Item>
            {/* <Menu.Item position='right'>
              <ButtonComponent title='Log in' as='a' inverted={!fixed} />
              <ButtonComponent title='Sign Up' as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}/> 
            </Menu.Item> */}
          </Menu>
        </Container>
        <HomepageHeading mobile />
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
