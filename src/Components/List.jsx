import React  from 'react';
import { List } from 'semantic-ui-react'; 

export function ListComponent(props) {
  return (
    <List>
      <List.Item>
          <List.Icon name={props.name} />
          <List.Content>{props.title}</List.Content>
      </List.Item>
    </List>
  )
}
  

export function FooterListComponent(props) { 
  return (
    <List link inverted> 
      <List.Item as={props.as} href={props.href}>
        <List.Icon name={props.name} />
          {props.title} 
      </List.Item> 
    </List> 
  )
}
  