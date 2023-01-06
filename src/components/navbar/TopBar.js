import {faBars, faBell, faPrint, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import indiaFlag from "../../asset/images/icons/india-flag.png";
const TopBar = ({hideSideBar, setHideSideBar}) => {
	return (
		<div
			className={` ${hideSideBar ? "pl-6" : "pl-[264px]"} duration-500 flex fixed  z-10 w-full pr-6 h-[50px] bg-gray-100 border-b items-center justify-between`}
		>
			<div>
				<FontAwesomeIcon onClick={() => setHideSideBar(!hideSideBar)} className="cursor-pointer" icon={faBars} />
			</div>
			<div className="flex items-center gap-10 text-gray-500">
				<div className="flex items-center gap-4 text-xl">
					<img src={indiaFlag} className="cursor-pointer hover:text-darken duration-300 h-9 " alt="" />
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faSearch} />
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faPrint} />
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faBell} />
				</div>
				<div className="flex items-center gap-3">
					<div className="text-right">
						<h5 className="text-darken font-semibold font-sans-pro">Brian Hughes</h5>
						<p className="text-sm -mt-1 text-gray-600">Admin</p>
					</div>
					<img
						src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000"
						className="h-7 object-cover  w-7 ring-2 ring-offset-1 ring-primary rounded-full"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
