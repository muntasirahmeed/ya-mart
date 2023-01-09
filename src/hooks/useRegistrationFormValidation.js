import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
export let userCreated = false;
const useRegistrationFormValidation = () => {
	const [formError, setFormError] = useState("");
	const navigate = useNavigate();
	const url = "http://3.110.167.166:8500/auth/registration";
	useEffect(() => {
		userCreated = false;
	}, []);
	function handleFormSubmit(e) {
		e.preventDefault();
		const username = e.target.name.value;
		const email = e.target.email.value;
		const phone = e.target.phone.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPass.value;
		const businessName = e.target.business.value;
		if (password === confirmPassword) {
			setFormError("");
			if (phone) {
				userCreated = true;
			} else {
				userCreated = false;
			}
			async function fetchData() {
				let response = await axios.post(url,{username, email, phone, password, confirmPassword, businessName},{
						headers: {
							"content-type": "application/json",
						},
					},
				);
				let user = await response.data;
				console.log(user);
			}
			navigate("/verify-otp");
			fetchData();
			e.target.reset();
		} else {
			setFormError("Password didn't match!");
		}
	}
	return {formError, handleFormSubmit};
};

export default useRegistrationFormValidation;
