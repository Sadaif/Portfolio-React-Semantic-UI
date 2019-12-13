// PersonalDetails.jsx
import React from 'react';
import { Form } from 'semantic-ui-react';  
import { ButtonComponent } from '../../Components/Button';
import { HeaderComponent } from '../../Components/Header';
import { InputFieldComponent } from '../../Components/Form';
 
 export default function PersonalDetails(props) {
  const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  }

  const back = (e) => {
      e.preventDefault();
      props.prevStep();
  }

  const { values } = props
  return( 
    <Form color='blue' >
				<HeaderComponent  as='h1' color='blue' title='Enter Personal Details' />
				<InputFieldComponent
					title='Age'
					placeholder='Age'
					onChange={(e) => props.setState.setAge(e.target.value)}
					defaultValue={values.age}
				 /> 
				<InputFieldComponent
					title='City'
					placeholder='City'
					onChange={(e) => props.setState.setCity(e.target.value)}
					defaultValue={values.city}
				 />  
				<InputFieldComponent
					title='Country'
					placeholder='Country'
					onChange={(e) => props.setState.setCountry(e.target.value)}
					defaultValue={values.country}
				 />  
        <ButtonComponent onClick={back} title='Back' />
        <ButtonComponent onClick={saveAndContinue} title='Save And Continue' />
    </Form>
      )
 }
   