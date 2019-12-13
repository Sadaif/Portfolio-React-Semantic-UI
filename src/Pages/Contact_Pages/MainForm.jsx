// MainForm.jsx
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation'; 

export default function MainForm() {

		let [step , setStep] = useState(1)
		let [firstName , setFirstName] = useState('')
		let [lastName , setLastName] = useState('')
		let [email , setEmail] = useState('')
		let [age , setAge] = useState('')
		let [city , setCity] = useState('')
		let [country , setCountry] = useState('')
		let [active , setActive] = useState(false)
		let [message , setMessage] = useState('')

		const	nextStep = () => {
				setStep(step + 1) 
			console.log('step' , step)
				if (step === 3){
					setStep(1)
					setFirstName('')
					setLastName('')
					setEmail('')
					setAge('')
					setCity('')
					setCountry('')
					setActive(true)
					setMessage('') 
				} 
			}
			
		const	prevStep = () => {
				setStep(step - 1) 
			}
 
		const	handleClose = () => setActive(false)

		const values = { firstName, lastName, email, age, city, country , step , active , message};
		const setState = {setFirstName , setLastName ,setEmail , setAge , setCity , setCountry , setMessage}

		switch(step) {
		case 1:
				return <UserDetails 
								nextStep={nextStep} 
								setState = {setState}
								values={values}
								handleClose = {handleClose}
								/>
		case 2:
				return <PersonalDetails 
								nextStep={nextStep}
								prevStep={prevStep}
								setState = {setState}
								values={values}
								/>
		case 3:
				return <Confirmation 
								nextStep={nextStep}
								prevStep={prevStep}
								values={values}
								/> 
		default: 
				return null
		} 
}
 