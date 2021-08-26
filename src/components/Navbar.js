import logo from "../media/images/logo-2915-white.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  {
    name: "About",
    href: "#",
    current: false,
    isMenu: true,
    childItems: [
      {name: "AboutDrop1", href: "#"},
      {name: "AboutDrop2", href: "#"},
      {name: "AboutDrop3", href: "#"}
    ],
  },
  { name: "Media", href: "#", current: false, isMenu: false },
  {
    name: "Resources",
    href: "#",
    current: false,
    isMenu: true,
    childItems: [
      {name: "MediaDrop1", href: "#"},
      {name: "MediaDrop2", href: "#"},
      {name: "MediaDrop3", href: "#"}
    ],
  },
  { name: "Sponsorship", href: "#", current: false, isMenu: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      if (item.isMenu == true) {
                          return (
                        <Menu as="div" className="relative inline-block text-left">
                          <Menu.Button className="inline-flex justify-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {item.name}
                            <ChevronDownIcon
                              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              {item.childItems.map((cItem) => 
                                <Menu.Item>
                                <a href={cItem.href} className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-gray-900 hover:text-white">
                                    {cItem.name}
                                </a>
                                </Menu.Item>
                              )}
                            </div>
                          </Menu.Items>
                        </Menu>
                          )
                      }
                      else {
                          return (
                        <a key={item.name} href={item.href} className={classNames(
                            item.current
                                ? "outline-solidwhite text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                        >
                            {item.name}
                        </a>
                          )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;