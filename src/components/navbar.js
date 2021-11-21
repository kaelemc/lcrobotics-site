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

function Navbar() {
  return (
    <div className="flex justify-center py-4 border-b b-gray-400 fixed w-screen bg-white">
		<div className="grid grid-flow-row grid-rows-1 content-center justify-between justify-items-center md:grid-flow-col w-8/12">
      	{/* team logo */}
      	<img src={Logo} className="block h-8 w-auto mb-4 md:mb-0" alt="LCR 2915 Logo" />
      	{/* navbar items */}
      	<ul className="grid grid-flow-col content-center text-gray-700 font-medium text-lg">
        {
			navigation.map((item) => {
          	// render dropdowns
          	if (item.isMenu) {
				return (
					<li className="group mx-3">
						<a href="#" className="hover:text-blue-600 inline-flex items-center">
							{item.name}
							<ChevronDownIcon className="h-5 w-5 ml-1 mt-1" />
						</a>
						<ul className="hidden group-hover:block absolute shadow bg-white rounded py-2 text-base">
						{item.childItems.map((cItem) => (
							<li className=" hover:text-blue-600 hover:bg-gray-200">
								<a className="block py-1 px-4" href={cItem.href}>{cItem.name}</a>
							</li>
						))}
						</ul>
					</li>
				);
          } 
		  else {
            return (
			<li className="mx-3 hover:text-blue-600">
				<a href={item.href} className="hover:text-blue-600">
					{item.name}
				</a>
			</li>
            );
          }
        })}

        {/* <li className="mx-3 hover:text-blue-600"><a href="#" className="hover:text-blue-600">Home</a></li>
                <li className="group mx-3">
                    <a href="#" className="hover:text-blue-600 inline-flex items-center">
                            About
                            <ChevronDownIcon className="h-5 w-5 ml-1 mt-1"/>
                    </a>
                    <ul className="hidden group-hover:block absolute shadow bg-white rounded py-2 text-base">
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Subink 1</a></li>
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Sublink 2</a></li>
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Sublink 3</a></li>
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Sublink 4</a></li>
                    </ul>
                </li>
                <li className="mx-3 hover:text-blue-600"><a href="#" className="hover:text-blue-600">Media</a></li>
                <li className="group mx-3">
                    <a href="#" className="hover:text-blue-600 inline-flex items-center">
                        Resources
                        <ChevronDownIcon className="h-5 w-5 ml-1 mt-1"/>
                    </a>
                    <ul className="hidden group-hover:block absolute shadow bg-white rounded py-2 text-base">
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Subink 1</a></li>
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Sublink 2</a></li>
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Sublink 3</a></li>
                        <li className="py-1 px-4 hover:text-blue-600 hover:bg-gray-200"><a href="#">Sublink 4</a></li>
                    </ul>
                </li>
                <li className="mx-3 hover:text-blue-600"><a href="#" className="hover:text-blue-600">Sponsorship</a></li> */}
      </ul>
	  </div>
    </div>
  );
}

export default Navbar;
