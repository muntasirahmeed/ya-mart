import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../asset/images/brand-logo-light.png";
import DropdownMenu from "./DropdownMenu";
import {navContent} from "./navContent";
import {menDummyImg} from "../ECommercePageComponents";
import {faBell} from "@fortawesome/free-solid-svg-icons";
const DashboardLeftNav = ({hideSideBar}) => {
	return (
		<div
			className={` ${
				hideSideBar ? "-translate-x-64" : "-translate-x-0 "
			} fixed text-light text-sm z-50 w-60 duration-500 h-screen bg-slate-900 flex-shrink-0`}
		>
			<div className="h-[50px] px-3 flex items-center justify-between">
				<img src={logo} className="h-9" alt="" />
				<div className="relative cursor-pointer">
					<FontAwesomeIcon className="text-2xl text-gray-200 mr-2.5" icon={faBell} />
					<span className="w-[17px] h-[17px] inline-flex  items-center justify-center absolute  -top-1.5 -right-1 text-[10px] font-medium  rounded-full text-light bg-indigo-600 pt-[1px]">5</span>
				</div>
			</div>
			<div className=" ">
				<div className="flex flex-col items-center mt-5 mb-5">
					<img className="h-16 w-16 object-cover rounded-full" src={menDummyImg} alt="" />
					<h4 className="text-xl font-semibold font-sans-pro mt-2">Brian Hughes</h4>
					<p className="text-sm text-gray-400">hughes.brain@company.com</p>
				</div>
				<div className="font-sans-pro duration-500 text-base">
					{navContent.sidenav.map((each) =>
						each?.subMenu === undefined ? (
							<Link key={each.id} to={each.path} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-slate-800">
								<FontAwesomeIcon icon={each.icon} />
								<span>{each.title}</span>
							</Link>
						) : (
							<DropdownMenu key={each.id} each={each} />
						),
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardLeftNav;