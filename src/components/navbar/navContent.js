import {faPhone, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export const navContent = {
	sidenav: [
		{
			id: 0,
			icon: faPhone,
			title: "Contact",
			subMenu: [
				{id: 1, title: "Chats", path: "/products"},
				{id: 2, title: "Customer Helpline", path: "/products"},
			],
		},

		{
			id: 1,
			icon: faShoppingCart,
			title: "E-Commerce",
			subMenu: [
				{id: 1, title: "Products", path: "/products"},
				{id: 2, title: "Product Details", path: "/product-details"},
				{id: 3, title: "New Products", path: ""},
				{id: 4, title: "Order", path: ""},
				{id: 5, title: "Order Details", path: ""},
			],
		},
	],
};
