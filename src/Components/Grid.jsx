import React from 'react';
import {Grid , Image} from 'semantic-ui-react';
// import { HeaderComponent } from './Header';
 

export function DevImageComponent(props){
  return( 
    <Grid centered columns={2}>
      <Grid.Column>
        <Image src={props.src} />
      </Grid.Column>
    </Grid>
  )
} 
 