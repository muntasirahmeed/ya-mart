import {faPhone, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export const navContent = {
	sidenav: [
		{id: 1, icon: faPhone, title: "Contact", path: "/", subMenu: ""},
		{
			id: 2,
			icon: faShoppingCart,
			title: "E-Commerce",
			path: "",
			subMenu: [
				{id: 1, title: "Products", path: "/products"},
				{id: 2, title: "Product Details", path: "/product-details"},
				{id: 3, title: "New Products", path: ""},
				{id: 4, title: "Order", path: ""},
				{id: 5, title: "Order Details", path: ""},
			],
		},
		// {id: 3, icon: "", title: "", path: "", subMenu: ""},
	],
};
