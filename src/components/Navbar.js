import logo from "../media/images/logo-2915-white.png";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "About",
    href: "/about",
    current: false,
    isMenu: true,
    childItems: [
      {name: "History", href: "/about#history"},
      {name: "Teams", href: "/about#teams"},
      {name: "Awards", href: "/about#awards"},
      {name: "VEX", href: "/about#vex"}
    ],
  },
  { name: "Media", href: "/media", current: false, isMenu: false },
  {
    name: "Resources",
    href: "/resources",
    current: false,
    isMenu: true,
    childItems: [
      {name: "Programming Resources", href: "#"},
      {name: "Build Resources", href: "#"},
      {name: "Tips and Tricks", href: "#"}
    ],
  },
  { name: "Sponsorship", href: "#", current: false, isMenu: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-900 fixed w-screen shadow-2xl">
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
                <div className="flex-shrink-0 flex items-center lg:self-start">
                  <Link to="/"><img className="block h-8 w-auto" src={logo} alt="2915" /></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      if (item.isMenu) {
                          return (
                        <Menu as="div" className="relative inline-block text-left">
                          <Menu.Button className="inline-flex justify-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {item.name}
                            <ChevronDownIcon
                              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                            >
                          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              {item.childItems.map((cItem) => 
                                <Menu.Item>
                                <Link to={cItem.href} className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-gray-900 hover:text-white">
                                    {cItem.name}
                                </Link>
                                </Menu.Item>
                              )}
                            </div>
                          </Menu.Items>
                          </Transition>
                        </Menu>
                          )
                      }
                      else {
                          return (
                        <Link to={item.href} className={classNames(
                            item.current
                                ? "outline-solidwhite text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
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
                <Link to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
