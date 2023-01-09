import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FormCheckBox, FormInputComp, FormInputPasswordComp, FormLabel, FormSubmitButton} from "../../../components/AuthPageComponents";
import useRegistrationFormValidation from "../../../hooks/useRegistrationFormValidation";

const RegistrationForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const {formError, handleFormSubmit} = useRegistrationFormValidation();
	return (
		<form onSubmit={handleFormSubmit} className="space-y-4 ">
			<div>
				<FormLabel text={"Full Name"} />
				<FormInputComp type="text" name="name" placeholder="Enter Full Name" />
			</div>
			<div>
				<FormLabel text={"Email Address"} />
				<FormInputComp type="email" name="email" placeholder="Enter Email Address" />
			</div>
			<div>
				<FormLabel text={"Phone Number"} />
				<FormInputComp type="tel" name="phone" placeholder="Enter Phone Number" />
			</div>
			<div>
				<FormLabel text={"Password"} />
				<FormInputPasswordComp
					type="password"
					name="password"
					placeholder="Enter password"
					showPassword={showPassword}
					setShowPassword={setShowPassword}
				/>
			</div>
			<div>
				<FormLabel text={"Confirm Password"} />
				<FormInputPasswordComp
					type="password"
					name="confirmPass"
					placeholder="Enter Confirm password"
					showPassword={showConfirmPassword}
					setShowPassword={setShowConfirmPassword}
				/>
				{formError && <p className="text-red-600 text-sm mt-2">{formError}</p>}
			</div>
			<div>
				<FormLabel text={"Business Name"} />
				<FormInputComp type="text" name="business" placeholder="Enter Business Name" />
			</div>
			<div className="flex items-center gap-2 text-sm text-muted tracking-wide">
				<FormCheckBox id="agree-with-condition" name="checkbox" />
				<label htmlFor="agree-with-condition" className="cursor-pointer flex items-center gap-1">
					I agree with
					<Link to="/terms-and-conditions" className="text-primary font-medium ">
						Terms
					</Link>
					and
					<Link to="/privacy-and-policy" className="text-primary font-medium ">
						Privacy Policy
					</Link>
				</label>
			</div>
			<div className="pt-2">
				<FormSubmitButton text="Sign up" />
			</div>
		</form>
	);
};

export default RegistrationForm;
