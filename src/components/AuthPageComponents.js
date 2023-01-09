import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import logo from "../asset/images/brand-logo.png";

export const FormInputClass =
	"w-full text-darken border border-gray-200 focus:ring-primary focus:ring-2 text-darken focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm";

export const FormLabel = ({text}) => {
	return <label className="block mb-1.5  text-muted text-sm font-medium tracking-wide">{text}</label>;
};

export const FormInputComp = ({type, placeholder, name}) => {
	return <input required type={type} name={name} className={FormInputClass} placeholder={placeholder} />;
};

export const FormInputPasswordComp = ({type, placeholder, name, showPassword, setShowPassword}) => {
	return (
		<div className="relative">
			<input required type={showPassword ? "text" : "password"} name={name} className={FormInputClass} placeholder={placeholder} />
			<FontAwesomeIcon
				onClick={() => setShowPassword(!showPassword)}
				className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
				icon={showPassword ? faEyeSlash : faEye}
			/>
		</div>
	);
};

export const FormCheckBox = ({id, name}) => {
	return (
		<input required name={name} type="checkbox" id={id} className="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary" />
	);
};

export const FormSubmitButton = ({text}) => {
	return (
		<button type="submit" className="w-full rounded-full py-2 bg-primary hover:bg-indigo-500 duration-300 text-white">
			{text}
		</button>
	);
};

export const AuthPageTopInfo = ({title, subtitle, linkText, path}) => {
	return (
		<div className="mb-7 ">
			<img src={logo} className="h-20 relative -left-2 mb-3" alt="" />
			<h2 className="text-4xl tracking-wide text-darken font-bold font-sans-pro">{title}</h2>
			<p className="text-sm text-gray-600 mt-1 ">
				{subtitle}
				<Link to={path} className="text-primary font-medium">
					{linkText}
				</Link>
			</p>
		</div>
	);
};
