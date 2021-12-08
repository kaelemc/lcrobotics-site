import React, { useState } from "react";
import Logo from "../media/images/logo-2915-blue.png";
import { ChevronDownIcon, MenuIcon } from "@heroicons/react/outline";

const navigation = [
	{ name: "Home", href: "/home", isMenu: false },
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

	const [showLinks, setShowLinks] = useState(false);

	return (
		<>
		<div className="fixed w-screen bg-white">
			<div className="p-4 border-b b-gray-400">
				<div className="grid grid-flow-col justify-between">
					{/* team logo */}
					<img src={Logo} className="block h-8" alt="LCR 2915 Logo" />
					{/* Hamburger Menu */}
					<button onClick={() => setShowLinks(!showLinks)} className="md:hidden">
						<MenuIcon className="h-8 text-gray-700"/>
					</button>
				</div>
			</div>
			<div className="">
					{/* navbar items */}
					<ul className={classNames( showLinks ? "hidden" : "text-gray-700 text-lg mt-3 border-b b-gray-400 px-4 pb-4 shadow-md")}>
					{
						navigation.map((item) => {
						// render dropdowns
						if (item.isMenu) {
							return (
								<li className="py-3">
									<a href={item.href} className="text-xl text-gray-900 font-semibold inline-block w-full">
										{item.name}
										<ChevronDownIcon className="sm:hidden h-5 w-5 ml-1 mt-1"/>
									</a>
									<ul className="">
									{item.childItems.map((cItem) => (
										<li className="py-2">
											<a className="inline-block w-full" href={cItem.href}>{cItem.name}</a>
										</li>
									))}
									</ul>
								</li>
							);
					} 
					else {
						return (
						<li className="py-3">
							<a href={item.href} className="text-xl text-gray-900 font-semibold inline-block w-full">
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
