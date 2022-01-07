import React, { useState } from "react";
import Logo from "../media/images/logo-2915-blue.png";
import { ChevronDownIcon, MenuIcon } from "@heroicons/react/outline";

const navigation = [
	{ name: "Home", href: "/", isMenu: false },
	{
		name: "About",
		href: "/about",
		isMenu: true,
		childItems: [
		{ name: "History", href: "/about#history" },
		{ name: "Teams", href: "/about#teams" },
		{ name: "Awards", href: "/about#awards" },
		{ name: "VEX", href: "/about#vex" },
		],
	},
	{ name: "Media", href: "/media", isMenu: false },
	{
		name: "Resources",
		href: "/resources",
		isMenu: true,
		childItems: [
		{ name: "Programming Resources", href: "#" },
		{ name: "Build Resources", href: "#" },
		{ name: "Tips and Tricks", href: "#" },
		],
	},
	{ name: "Sponsorship", href: "#", isMenu: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export default function Navbar() {

	const [click, setClick] = useState(false);

	return (
		<>
		<div className="fixed w-screen bg-white shadow-sm z-50">
			<div className="p-4 md:grid grid-flow-col justify-between mx-auto max-w-screen-xl">
				<div className="grid grid-flow-col justify-between md:block">
					{/* team logo */}
					<img src={Logo} className="block h-8" alt="LCR 2915 Logo" />
					{/* Hamburger Menu */}
					<button onClick={() => setClick(!click)} className="md:hidden">
						<MenuIcon className="h-8 text-gray-700"/>
					</button>
				</div>
					{/* navbar items */}
					<ul className={classNames( click ? "text-gray-700 text-lg mt-3 md:grid grid-flow-col content-center md:m-0" : "hidden md:grid grid-flow-col content-center md:m-0")}>
					{
						navigation.map((item) => {
						// render dropdowns
						if (item.isMenu) {
							return (
								<li className="py-3 md:p-0 md:mx-3 group">
									<a href={item.href} className="text-xl text-gray-900 font-semibold inline-block w-full hover:text-blue-600 md:inline-flex items-center md:text-gray-700  md:font-medium md:text-base transition duration-300 ease-in-out">
										{item.name}
										<ChevronDownIcon className="hidden md:block h-5 w-5 ml-1 mt-1"/>
									</a>
									<ul className="sm:block md:hidden group-hover:block md:absolute md:shadow md:bg-white md:rounded md:py-2 md:text-base">
									{item.childItems.map((cItem) => (
										<li className="py-2 hover:text-blue-600 hover:bg-gray-200 md:py-1 transition duration-300 ease-in-out">
											<a className="inline-block w-full md:block md:py-1 md:px-4" href={cItem.href}>{cItem.name}</a>
										</li>
									))}
									</ul>
								</li>
							);
					} 
					else {
						return (
						<li className="py-3 md:p-0 md:mx-3">
							<a href={item.href} className="text-xl text-gray-900 font-semibold inline-block w-full hover:text-blue-600 md:block md:text-gray-700 md:font-medium md:text-base transition duration-300 ease-in-out">
								{item.name}
							</a>
						</li>
						);
					}
					})}
					</ul>
				</div>
			</div>
		</>
	);
}
