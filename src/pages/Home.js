import { LocationMarkerIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom"
import GasAppLogo from "../media/images/gas-appliance-sponsor.jpg"

function Home() {
    return (
        <div className="w-full">
          {/* Hero */}
          <div className="grid grid-rows-1 h-screen md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="bg-gray-100 h-full w-full flex items-center justify-center">
              <div className="mx-10">
                <h1 className="font-bold text-5xl">
                  <span className="block inline">We Are</span>
                  <br/>
                  <span className="block text-green-600">
                    Lynfield College Robotics
                  </span>
                </h1>
                <p className="flex inline py-2.5">
                  <LocationMarkerIcon className="h-6 w-auto" />
                  Auckland, New Zealand
                </p>
                <p>
                A High School robotics team consisting of students based out of Lynfield College. We compete in the global VEX IQ Challenge (up to 14 years old) and the VEX Robotics Competition (up to 18 years old). 
                </p>
                <div className="mt-5">
                    <div className="rounded-md shadow lg:w-1/2">
                      <a href="#sponsors" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                        Learn More
                      </a>
                    </div>
                </div>
              </div>
            </div>
            <div className="hidden bg-hero h-full w-full bg-top bg-no-repeat bg-cover md:block">
              test
            </div>
          </div>
          {/* sponsors Div */}
          <div className="g">
            
          </div>
          <div className="flex flex-col justify-center items-center px-10" id="sponsors">
            <div className="text-center">
              <h1 className="text-4xl mt-8 mb-2">Our Sponsors!</h1>
              <p className="text-gray-500 italic">We thank all our sponsors, we couldn't be able to do what we love without you guys!</p>
            </div>
            <a href="https://gasappliancespecialists.nz/" target="new"><img src={GasAppLogo} alt="Gas Appliance Specialsts Logo"/></a>
            <div className="my-8 w-full flex justify-center">
                <div className="rounded-md shadow w-full lg:w-1/4">
                    <Link to="/about" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    Learn More
                    </Link>
                </div>
            </div>
          </div>
        </div>
      );
  }
  
  export default Home;
  