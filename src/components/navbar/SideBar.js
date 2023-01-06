import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../asset/images/brand-logo-light.png";
import {navContent} from "./navContent";
const SideBar = ({hideSideBar}) => {
	const [showDropdownMenu, setShowDropDownMenu] = useState(true);
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
						each.subMenu === "" ? (
							<Link key={each.id} to={each.path} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-slate-800">
								<FontAwesomeIcon icon={each.icon} />
								<span>{each.title}</span>
							</Link>
						) : (
							<div key={each.id} className="relative z-20 overflow-hidden">
								<div
									onClick={() => setShowDropDownMenu(!showDropdownMenu)}
									className="flex items-center gap-3 px-3 py-2 bg-slate-900 cursor-pointer relative z-10 w-full hover:bg-slate-800"
								>
									<FontAwesomeIcon icon={each.icon} />
									<span>{each.title}</span>
									<FontAwesomeIcon
										icon={faAngleDown}
										className={`absolute right-3 top-3 transform duration-300 ${showDropdownMenu ? "-rotate-180" : ""}`}
									/>
								</div>
								<div
									className={`bg-gray-800 ${
										showDropdownMenu ? "top-0 relative" : "-top-80 absolute"
									} overflow-hidden duration-300 relative z-0 left-0`}
								>
									{each.subMenu.map((menuItem) => (
										<Link
											key={menuItem.id}
											to={menuItem.path}
											className="pl-11 block py-2 cursor-pointer relative w-full hover:bg-slate-700"
										>
											{menuItem.title}
										</Link>
									))}
								</div>
							</div>
						),
					)}
				</div>
			</div>
		</div>
	);
};

export default SideBar;
