import React from 'react';
import { Header , Icon , Dimmer} from 'semantic-ui-react' 


export function DimmerComponent(props) {
  return (
    <Dimmer active={props.active} onClickOutside={props.onClickOutside} page>
      <Header as={props.aas} icon inverted>
        <Icon name={props.name} />
          {props.title}
        <Header.Subheader>{props.Subheader}</Header.Subheader>
      </Header>
    </Dimmer>
  )
}
  