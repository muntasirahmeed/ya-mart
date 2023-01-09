import React from "react";
import {Pagination} from "../../../components/ECommercePageComponents";
import { tableData } from "../ecommerceContant";
const ProductsTable = () => {
	return (
		<div className="overflow-hidden w-full max-w-6xl mx-auto overflow-x-auto rounded-lg border border-gray-200">
			<table className="min-w-full divide-y divide-gray-100 text-sm">
				<thead className="bg-gray-100">
					<tr className="font-medium text-left text-darken">
						<th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-3 text-left">
							<input
								className="h-4 cursor-pointer w-4 rounded border-gray-200 text-primary focus:ring-primary"
								type="checkbox"
								id="SelectAll"
							/>
						</th>
						{tableData.header.map((each) => (
							<th key={each.id} className="whitespace-nowrap px-4 py-3">
								{each.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 text-muted">
					{tableData.row.map((each) => (
						<tr key={each.id}>
							<td className="sticky inset-y-0 left-0 bg-white px-4 py-3">
								<input
									className="h-4 w-4 cursor-pointer rounded border-gray-200 text-primary focus:ring-primary"
									type="checkbox"
									id={each.id}
								/>
							</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.title}</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.category}</td>
							<td className="whitespace-nowrap px-4 py-3 ">₹ {each.price}.00</td>
							<td className="whitespace-nowrap px-4 py-3">
								<span className="border-[1.5px] cursor-pointer border-red-600 hover:bg-red-600 hover:text-light duration-300 inline-flex items-center text-xl pb-[1px] pl-[1px]  justify-center rounded-full text-red-600 w-4 h-4">
									-
								</span>
								<span className="inline-block text-center  w-10 ">{each.quantity}</span>
								<span className="border-[1.5px] cursor-pointer border-green-600 hover:bg-green-600 hover:text-light duration-300  inline-flex items-center justify-center font-semibold pl-[1px] rounded-full text-green-600 w-4 h-4">
									+
								</span>
							</td>
							<td className="whitespace-nowrap px-4 py-3 text-green-600"> In stock</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination selectValue={""} increaseValue={""} />
		</div>
	);
};

export default ProductsTable;
