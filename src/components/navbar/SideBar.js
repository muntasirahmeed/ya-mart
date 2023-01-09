import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../asset/images/brand-logo-light.png";
import DropdownMenu from "./DropdownMenu";
import {navContent} from "./navContent";
const SideBar = ({hideSideBar}) => {
	return (
		<div
			className={` ${
				hideSideBar ? "-translate-x-64" : "-translate-x-0 "
			} fixed text-light text-sm z-50 w-60 duration-500 h-screen bg-slate-900 flex-shrink-0`}
		>
			<div className="h-[50px] px-3 flex items-center ">
				<img src={logo} className="h-9" alt="" />
			</div>
			<div className=" space-y-8">
				<div className="px-3">
					<h4 className="text-indigo-500 font-sans-pro text-lg font-semibold tracking-wide">Applications</h4>
					<p className=" text-gray-500">Custom made application designs</p>
				</div>
				<div className="font-sans-pro text-base">
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

export default SideBar;
