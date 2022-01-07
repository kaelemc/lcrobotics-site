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

export default function Footer() {
    return (
        <>
        <div className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-center md:justify-between items-center flex-row px-4 py-10">
                    <div className="">
                        <h1 className="font-semibold text-gray-900 text-lg">
                            Lynfield College Robotics<br/>
                            <span className="text-right w-full block font-normal">2915</span>
                        </h1>
                        {/* socials */}
                        <div className="">

                        </div>
                    </div>
                    {/* footer nav */}
                    <ul className="hidden md:grid grid-flow-row md:grid-flow-col">
                        {
                            navigation.map((item) => {
                                if(item.isMenu) {
                                    return(
                                        <ul className="px-4">
                                            <li className="font-semibold text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out"><a href={item.href}>{item.name}</a></li>
                                            { item.childItems.map((childItem) => {
                                                return(
                                                    <li className="py-2"><a href={childItem.href} className="hover:text-blue-600 transition duration-300 ease-in-out">{childItem.name}</a></li>
                                                );
                                            }) 
                                            }
                                        </ul>
                                    );
                                }
                                else {
                                    return(
                                        <li><a href={item.href} className="font-semibold text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out">{item.name}</a></li>
                                    );
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
            <div>
                    <p className="text-center py-4">&copy; 2021-2022 Lynfield College Robotics. All rights reserved</p>
            </div>
        </div>
        </>
    );
}