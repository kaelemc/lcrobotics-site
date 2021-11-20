import Logo from '../media/images/logo-2915-blue.png'
import { ChevronDownIcon } from '@heroicons/react/outline'

function Navbar() {
    return (
        // border-b-2 b-gray-400
      <div className="w-screen grid grid-flow-col grid-rows-1 justify-around content-center py-4">
          <img src={ Logo } className="block h-8 w-auto" alt="LCR 2915 Logo image"/>
          <ul className="grid grid-flow-col content-center text-gray-700 font-medium text-lg">
                <li className="mx-3 hover:text-blue-600"><a href="#" className="hover:text-blue-600">Home</a></li>
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
                <li className="mx-3 hover:text-blue-600"><a href="#" className="hover:text-blue-600">Sponsorship</a></li>
          </ul>
      </div>
    );
  }
  
  export default Navbar;
  