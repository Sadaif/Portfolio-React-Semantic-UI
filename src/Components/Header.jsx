import React from 'react';
import { Header } from 'semantic-ui-react' 


export function HeaderComponent(props) {
  return (
    <Header 
      as={props.as}
      color={props.color}
      content={props.content}
      inverted={props.inverted}
    >
      {props.title}
    </Header> 
  )
}
  