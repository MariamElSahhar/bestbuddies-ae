import { React } from "react";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
// import { PhoneInput } from 'react-international-phone';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = ({ updateSubmission }) => {
	const form = useForm();
	const { register, control } = form;

	// const [phone, setPhone] = useState('');
	// const [firstnameRequired, setFirstnameRequired] = useState(false);
	// const [lastnameRequired, setLastnameRequired] = useState(false);
	// const [emailRequired, setEmailRequired] = useState(false);
	// const [messageRequired, setMessageRequired] = useState(false);
	// const handleSubmit = async (event) => {
	//     event.preventDefault();
	//     const formData = new FormData(event.target);

	//     if (!formData.get('first_name'))
	//         setFirstnameRequired(true);
	//     if (!formData.get('last_name'))
	//         setLastnameRequired(true);
	//     if (!formData.get('email'))
	//         setEmailRequired(true);
	//     if (!formData.get('message'))
	//         setMessageRequired(true);
	//     if (formData.get('first_name') && formData.get('last_name') && formData.get('email') && formData.get('message')) {
	//         updateSubmission(true);
	//         await fetch('https://bestbuddies.ae/backend/inquiry.php', {
	//             method: 'POST',
	//             body: formData,
	//         });
	//     }
	// }

	return (
		<>
			<form id="contact-form">
				<div>
					<InputField
						name="first_name"
						label="First Name"
						type="text"
						{...register("first_name")}
					/>
					<InputField
						name="last_name"
						label="Last Name"
						type="text"
						{...register("last_name")}
					/>
					<InputField
						name="email"
						label="Email Address"
						type="email"
						{...register("email")}
					/>
					<InputField
						name="number"
						label="Phone Number"
						type="tel"
						optional={true}
					>
						<PhoneInput
							id="number"
							defaultCountry="AE"
							{...register("number")}
						/>
					</InputField>
				</div>
				<div id="message-col">
					<div className="input-field">
						{/* <label htmlFor='message'>
                            Your Message
                            {
                                messageRequired ?
                                <span className='empty-field'>*     Message cannot be empty</span>
                                : ''
                            }
                        </label> */}
						<textarea
							name="message"
							id="message"
							{...register("message")}
						></textarea>
					</div>
					<button type="submit" name="submit">
						Send Message
					</button>
				</div>
			</form>
			<DevTool control={control} />
		</>
	);
};

export default ContactForm;
