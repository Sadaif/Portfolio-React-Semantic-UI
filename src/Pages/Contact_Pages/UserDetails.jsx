import React from 'react';
import { Form } from 'semantic-ui-react';
import { ButtonComponent } from '../../Components/Button';
import { HeaderComponent } from '../../Components/Header';
import { InputFieldComponent, TextAreaComponent } from '../../Components/Form';
import { DimmerComponent } from '../../Components/Dimmer';
 

export default function UserDetails(props) {
	
	const saveAndContinue = (e) => {
		e.preventDefault()
		props.nextStep()
	}

	const { values } = props;
	return(
		<div>  

			<DimmerComponent 
				active={values.active} 
				onClickOutside={props.handleClose} 
				as='h2' name='heart' title='Thanks !' 
				Subheader="Your message sent Successfully"
			/>  

			<Form >
				<HeaderComponent as='h1' color='blue' title='Contact' />
				<InputFieldComponent 
					title='First Name'
					placeholder='First Name'
					onChange={(e) => props.setState.setFirstName(e.target.value)}
					defaultValue={values.firstName} 
				/>
				<InputFieldComponent 
					title='Last Name'
					placeholder='Last Name'
					onChange={(e) => props.setState.setLastName(e.target.value)}
					defaultValue={values.lastName} 
				/>  
				<InputFieldComponent 
					title="Email"
					type='email'
					placeholder='Email Address'
					onChange={(e) => props.setState.setEmail(e.target.value)}
					defaultValue={values.email} 
				/>   
				<TextAreaComponent 
					title='Message'
					placeholder='Tell us more' 
					style={{ minHeight: 100 }} 	
					defaultValue={values.message} 
					type='message' 
					onChange={(e) => props.setState.setMessage(e.target.value)}
				/> 
				<ButtonComponent onClick={saveAndContinue} title='Save And Continue' />
			</Form>

		</div>
	)
}

 