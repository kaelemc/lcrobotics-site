const navigation = [
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
        <div className="flex bg-black text-white px-4 py-10 justify-around items-center flex-row">
            <div className="">
                <h1 className="font-bold text-lg">
                    Lynfield College Robotics<br/>
                    <span className="text-right w-full block font-normal">2915</span>
                </h1>
                {/* socials */}
                <div className="">

                </div>
            </div>
            {/* footer nav */}
            <div className="hidden md:grid grid-flow-row md:grid-flow-col">
                {
                    navigation.map((item) => {
                        if(item.isMenu) {
                            return(
                                <ul className="px-4">
                                    <li className="text-gray-300 font-bold hover:text-gray-400 transition duration-300 ease-in-out"><a href={item.href}>{item.name}</a></li>
                                    { item.childItems.map((childItem) => {
                                        return(
                                            <li className="py-2"><a href={childItem.href} className="hover:text-gray-300 transition duration-300 ease-in-out">{childItem.name}</a></li>
                                        );
                                    }) 
                                    }
                                </ul>
                            );
                        }
                        else {
                            return(
                                <a href={item.href} className="text-gray-300 font-bold hover:text-gray-400 transition duration-300 ease-in-out inline-block">{item.name}</a>
                            );
                        }
                    })
                }
            </div>
        </div>
        <div className="bg-black text-white">
            <p className="text-center pb-4">&copy; 2021 Lynfield College Robotics. All rights reserved</p>
        </div>
        </>
    );
}