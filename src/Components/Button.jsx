import React from 'react';
import { Button } from 'semantic-ui-react' 


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