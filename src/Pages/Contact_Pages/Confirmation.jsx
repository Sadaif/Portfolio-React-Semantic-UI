// Confirmation.jsx
import React  from 'react'; 
import { ButtonComponent } from '../../Components/Button';
import { HeaderComponent } from '../../Components/Header';
import { ListComponent } from '../../Components/List';

export default function Confirmation(props) {
	const saveAndContinue = (e) => {
		e.preventDefault();
		props.nextStep();
	}

	const back = (e) => {
			e.preventDefault();
			props.prevStep();
	}

		const {values: { firstName, lastName, email, age, city, country , message }} = props;
		let firstitle = "First Name:  " + firstName ;
		let seconedtitle = "Last Name:  " + lastName ;
		let thirdtitle = <a href='mailto:jack@semantic-ui.com'>{email}</a>;
		let forthtitle = age  + ' Years';
		let fifthtitle = city + ',' + country ;
	return(
		<div>
			<HeaderComponent as='h1' color='blue' title='Confirm your Details' />
			<p>Click Confirm if the following details have been correctly entered</p>
			<ListComponent 
				name="users"
				title={firstitle}
			/>
			<ListComponent 
				name="users"
				title={seconedtitle}
			/>
			<ListComponent 
				name="mail"
				title={thirdtitle}
			/>
			<ListComponent 
				name="calendar"
				title={forthtitle} 
			/>
			<ListComponent 
				name="marker"
				title={fifthtitle} 
			/>
			<ListComponent 
				name="chat" 
				title={message}
			/> 
			
			<ButtonComponent onClick={back} title='Back' />
			<ButtonComponent onClick={saveAndContinue} title='Send' /> 
		</div>
    )
} 