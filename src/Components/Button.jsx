import React from 'react';
import { Button , Header, Image, Modal } from 'semantic-ui-react' 


export function ButtonComponent(props) {
  return (
    <Button 
      primary={props.primary}
      secondary={props.secondary}
      size={props.size}
      onClick={props.onClick}
      as={props.as}
      inverted={props.inverted}
      style={props.style}
      color="green"
      >
      {props.title}
    </Button>
  )
}

export function Hex(props) {
  return (
    <Button >{props.title}</Button>
  )
}

export class ModalExampleDimmer extends React.Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div> 
        <Button onClick={this.show('blurring')}>Blurring</Button>

        <Modal dimmer={dimmer} style={{height: '50vh' , marginLeft: '30em' , marginTop: '5em'}} open={open} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
