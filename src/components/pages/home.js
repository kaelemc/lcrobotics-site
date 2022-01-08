import Team2915U from '../../media/images/2915U.JPG'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import GasApplianceLogo from '../../media/images/gas-appliance-sponsor.jpg'

const welcomeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque tincidunt mauris vel mollis. Vestibulum vel commodo ligula. Integer quis sem id ex pretium commodo nec vitae elit. Donec suscipit dui tincidunt felis fringilla, id viverra tortor pulvinar. Aliquam aliquam tellus ex, id tristique elit eleifend eu. Nam nec lectus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam urna metus, luctus in molestie non, ultricies id metus. Phasellus orci ex, finibus nec congue ut, finibus sed est. Curabitur metus lacus, sodales sed viverra id, tempor quis arcu. Donec ipsum metus, varius convallis tortor semper, congue euismod nibh. Sed ac metus a sapien ullamcorper accumsan. "

// sponsors tagline
const sponsorsText = "We thank our sponsors for helping us with the opportunity to do what we love ❤️"

const GasApplianceSpecialistsLink = "https://gasappliancespecialists.nz/"

const quickStats = [
    {
        stat: "13",
        tagline: "years competiting, since 2008-2009 season VRC Elevation"
    },
    {
        stat: "7",
        tagline: "VEX World championships attended",
    },
    {
        stat: "43",
        tagline: "awards on a national & international level",
    },
]

const teams = [
    {
        teamName: "Team Name",
        teamMembers: "Team Members",
        isIQ: false
    },
    {
        teamName: "Team Name",
        teamMembers: "Team Members",
        isIQ: false
    },
    {
        teamName: "Team Name",
        teamMembers: "Team Members",
        isIQ: false
    },
    {
        teamName: "Team Name",
        teamMembers: "Team Members",
        isIQ: false
    },
    {
        teamName: "Team Name",
        teamMembers: "Team Members",
        isIQ: false
    },
    {
        teamName: "Team Name",
        teamMembers: "Team Members",
        isIQ: false
    },
]

export default function Home() {
    return (
        <>
        <main className="max-w-screen-xl mx-auto">
            {/* hero */}
            <div className="h-screen relative flex items-center md:max-w-screen md:h-auto md:justify-center">
                    <img className="h-full object-cover md:rounded-xl" src={Team2915U} alt=""/>
                    <div className="absolute inset-0 bg-blue-600 mix-blend-multiply md:rounded-xl"></div>
                    <div className="absolute mx-5 font-bold text-3xl backdrop-filter md:text-6xl">
                        <div>
                            <h1 className="text-white">We are</h1>
                        </div>
                        <div>
                            <h1 className="text-blue-50">Lynfield College Robotics</h1>
                        </div>
                        <div className="text-white text-base font-normal inline-flex items-center">
                            <LocationMarkerIcon className="h-4"/>
                            <p>&nbsp;Auckland, New Zealand</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                            <button type="button" className="bg-white text-blue-600 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 md:px-6 md:py-3.5">
                                Learn more
                            </button>
                        </div>
                    </div>
            </div>
            {/* about section */}
            <div className="mx-5 lg:mx-0">

                <h1 className="py-10 text-4xl font-bold">Welcome</h1>
                <p className="text-justify md:text-left">{welcomeText}</p>

                <div className="grid grid-flow-row justify-between md:gap-x-8 md:grid-flow-col mt-6">
                    {
                        quickStats.map((stat) => {
                            return(
                                <>
                                <div className="mt-8 md:mt-0">
                                    <h5 className="text-blue-600 font-bold text-3xl">{stat.stat}</h5>
                                    <p className="font-normal text-gray-700">{stat.tagline}</p>
                                </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
            {/* teams section */}
            <div className="mx-5 lg:mx-0">

                <h1 className="py-10 text-4xl font-bold">Our Teams</h1>

                <div className="grid grid-flow-row gap-4 md:grid-cols-3">
                    {
                        teams.map((team) => {
                            return(
                                <div className="p-6 w-full bg-white rounded-lg border border-gray-200 hover:bg-gray-100">
                                    <div>
                                        <div className="flex mb-2 justify-between">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900">{team.teamName}</h5>
                                            {
                                                team.isIQ ? (
                                                    <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded self-center">IQ</span>
                                                ) : (
                                                    <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded self-center">VRC</span>
                                                )
                                            }
                                        </div>
                                        <p className="font-normal text-gray-700">{team.teamMembers}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            {/* sponsors section */}
            <div className="mx-5 lg:mx-0">

                <h1 className="py-10 text-4xl font-bold">Sponsors</h1>

                <p className="text-justify md:text-left">{sponsorsText}</p>
                
                <div className="flex justify-center">
                    <a href={GasApplianceSpecialistsLink} target="new">
                        <img src={GasApplianceLogo} alt="Gas Appliance Specialist logo" className=""/>
                    </a>
                </div>
            </div>
        </main>
        </>
        
    )
}