import React from 'react';
import { Form , TextArea } from 'semantic-ui-react';
 
export function LabelComponent(props) {
  return (
    <label>{props.title}</label>
  )
}

export function InputComponent(props) {
  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      type={props.type}
      />
  )
}

export function InputFieldComponent(props){ 
  return( 
    <Form.Field>
	    <label>{props.title}</label>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        type={props.type}
      /> 
    </Form.Field> 
  )
}

export function TextAreaComponent(props){
  return( 
    <Form.Field>
      <label>{props.title}</label>
      <TextArea 
        placeholder={props.placeholder} 
        style={props.style} 	
        defaultValue={props.defaultValue} 
        type={props.type} 
        onChange={props.onChange} />
    </Form.Field>
  )
} 