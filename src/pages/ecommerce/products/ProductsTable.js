import React from "react";
import {Pagination, tableData} from "../../../components/ECommercePageComponents";
const ProductsTable = () => {
	return (
		<div className="overflow-hidden w-full max-w-6xl mx-auto overflow-x-auto rounded-lg border border-gray-200">
			<table className="min-w-full divide-y divide-gray-100 text-sm">
				<thead className="bg-gray-100">
					<tr className="font-medium text-left text-darken">
						<th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-3 text-left">
							<input className="h-4 cursor-pointer w-4 rounded border-gray-200" type="checkbox" id="SelectAll" />
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
								<input className="h-4 w-4 cursor-pointer rounded border-gray-200" type="checkbox" id={each.id} />
							</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.title}</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.category}</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.quantity}</td>
							{each.status === "paid" && (
								<td className="whitespace-nowrap px-4 py-3">
									<strong className="rounded bg-green-100 py-1 px-2 text-xs font-medium text-green-700">Paid</strong>
								</td>
							)}
							{each.status === "cancelled" && (
								<td className="whitespace-nowrap px-4 py-3">
									<strong className="rounded bg-red-100 py-1 px-2 text-xs font-medium text-red-700">Cancelled</strong>
								</td>
							)}
							{each.status === "refunded" && (
								<td className="whitespace-nowrap px-4 py-3">
									<strong className="rounded bg-amber-100 py-1 px-2 text-xs font-medium text-amber-700">Partially Refunded</strong>
								</td>
							)}
							<td className="whitespace-nowrap px-4 py-3 ">{each.status === "paid" ? "available" : ""}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination selectValue={""} increaseValue={""} />
		</div>
	);
};

export default ProductsTable;
