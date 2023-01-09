import React, { useState } from 'react'
import DashboardLeftNav from '../navbar/DashboardLeftNav';
import DashboardTopNav from '../navbar/DashboardTopNav';
import DashboardRightMessageNav from '../navbar/DashboardRightMessageNav';

const DashboardLayout = ({children}) => {
 	const [hideSideBar, setHideSideBar] = useState(false);
	return (
		<div className="font-roboto select-none">
			<div className="flex items-start">
				<DashboardLeftNav hideSideBar={hideSideBar} />
        <DashboardTopNav hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
        <DashboardRightMessageNav/>
			</div>
			<div className={`h-20 w-full pr-[88px] pt-[50px] ${hideSideBar ? "pl-6" : "pl-[264px]"} duration-500`}>{children}</div>
		</div>
	);
}

export default DashboardLayout