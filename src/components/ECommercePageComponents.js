import {faAngleDown, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PageTitle = ({title}) => {
	return <h2 className="font-sans-pro font-bold text-4xl text-darken ">{title}</h2>;
};

export const Pagination = ({pageNo}) => {
	return (
		<div className="w-full py-3 flex items-center justify-end gap-8 pr-4 text-sm text-gray-500 border-t">
			<div className="flex items-center gap-2">
				<span>Row per page: </span>
				<label htmlFor="options" className="relative w-10 block cursor-pointer" id="options">
					<select className="border-none bg-none p-0 text-sm appearance-none focus:ring-0 w-full cursor-pointer">
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">20</option>
					</select>
					<FontAwesomeIcon icon={faAngleDown} className="absolute top-1 text-xs right-2.5" />
				</label>
			</div>
			<div className="flex items-center gap-4">
				<span>1-10 of 20</span>
				<div className="flex items-center gap-2">
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faAngleLeft} />
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faAngleRight} />
				</div>
			</div>
		</div>
	);
};

export const tableData = {
	header: [
		{id: 1, title: "Name"},
		{id: 2, title: "Category"},
		{id: 3, title: "Price"},
		{id: 4, title: "Quantity"},
		{id: 5, title: "Active"},
	],
	row: [
		{id: 1, title: "A Walk Amongst Friends - Canvas Print", category: "Canvas Print", quantity: 10, status: "cancelled"},
		{id: 2, title: "Braies Lake - Canvas Print", category: "Canvas Print", quantity: 10, status: "paid"},
		{id: 3, title: "Fall Glow - Canvas Print", category: "Canvas Print", quantity: 10, status: "refunded"},
		{id: 4, title: "First Snow - Canvas Print", category: "Canvas Print", quantity: 10, status: "paid"},
		{id: 5, title: "Lago di Braies - Canvas Print", category: "Canvas Print", quantity: 10, status: "refunded"},
		{id: 6, title: "Indian Citizen", category: "Canvas Print", quantity: 10, status: "cancelled"},
		{id: 7, title: "Lago di Sorapis - Canvas Print", category: "Canvas Print", quantity: 10, status: "refunded"},
		{id: 8, title: "Never Stop Changing - Canvas Print", category: "Canvas Print", quantity: 10, status: "paid"},
		{id: 9, title: "Reaching - Canvas Print", category: "Canvas Print", quantity: 10, status: "refunded"},
		{id: 10, title: "Morain Lake - Canvas Print", category: "Canvas Print", quantity: 10, status: "cancelled"},
		{id: 11, title: "Yosemite - Canvas Print", category: "Canvas Print", quantity: 10, status: "refunded"},
		{id: 12, title: "Lago di Sorapis - Canvas Print", category: "Canvas Print", quantity: 10, status: "refunded"},
		{id: 13, title: "Never Stop Changing - Canvas Print", category: "Canvas Print", quantity: 10, status: "paid"},
		{id: 14, title: "Reaching - Canvas Print", category: "Canvas Print", quantity: 10, status: "refunded"},
	],
};
export const menDummyImg =
	"https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000";