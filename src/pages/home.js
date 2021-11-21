import { LocationMarkerIcon } from '@heroicons/react/outline'
import Placeholder from '../media/images/placeholder.png'

const aboutCards = [
    {
        heading: "13",
        content: "years competiting, since 2008-2009 season VRC Elevation",
    },
    {
        heading: "7",
        content: "VEX World championships attended",
    },
    {
        heading: "43",
        content: "awards on a national & international level",
    },
]

const teamCards = [
    {
        teamID: "2915A",
        img: Placeholder,
        imgAlt: "",
        teamLvl: "VRC"
    },
    {
        teamID: "2915B",
        img: Placeholder,
        imgAlt: "",
        teamLvl: "VRC"
    },
    {
        teamID: "2915E",
        img: Placeholder,
        imgAlt: "",
        teamLvl: "VRC"
    },
    {
        teamID: "2915F",
        img: Placeholder,
        imgAlt: "",
        teamLvl: "VRC"
    },
    {
        teamID: "2915G",
        img: Placeholder,
        imgAlt: "",
        teamLvl: "VRC"
    },
    {
        teamID: "2915U",
        img: Placeholder,
        imgAlt: "",
        teamLvl: "VRC"
    },
    
]

function Home() {
    return (
        <>
        <div className="h-screen w-8/12 mx-auto">
            {/* container div */}
            <div className="flex flex-col justify-center h-1/2">
                {/* hero div */}
                <div className="inline-block">
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-semibold my-3">
                            We are<br/>
                            Lynfield College Robotics
                        </h1>
                        <p className="inline-flex mt-2 mb-3 text-gray-600">
                            <LocationMarkerIcon className="h-6 w-auto"/>Auckland, New Zealand
                        </p>
                        <button className="bg-blue-600 text-white rounded-lg p-2 text-lg hover:bg-blue-700 transition duration-300 ease-in-out w-1/4">Learn More</button>
                    </div>
                </div>
            </div>
            {/* about us cards */}
            <div className="h-1/2">
                <div className="mb-14">
                    <h1 className="text-5xl mb-10">Welcome</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra tristique magna in ullamcorper. Suspendisse imperdiet tempor mi, nec egestas enim viverra et. Etiam a vestibulum elit, quis elementum lorem. Aliquam lectus orci, rutrum eu augue quis, efficitur placerat eros. Pellentesque imperdiet pharetra dolor vel elementum. Nulla fermentum tellus a neque sodales suscipit. Curabitur malesuada, eros ut blandit suscipit, turpis mauris tincidunt erat, et pulvinar tortor ipsum a enim. Aliquam id lectus vel ipsum iaculis blandit et vel leo. </p>
                </div>
                <div className="grid grid-flow-col grid-cols-3 gap-x-8">
                    {
                        aboutCards.map((item) => {
                            return( 
                                <div className="mt-6">
                                    <h1 className="text-5xl text-blue-600 font-bold">{item.heading}</h1>
                                    <h2 className="text-xl">{item.content}</h2>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            {/* Teams */}
            <div class="h-screen">
                <h1 className="text-5xl mb-10">Our Teams</h1>
                <div className="grid grid-cols-3 gap-x-8">
                    {
                        teamCards.map((team) => {
                            return( 
                                <div className="mt-6 bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
                                    <img src={team.img} alt={team.imgAlt} className="rounded-t-lg"/>
                                    <div className="p-4">
                                        <h1 className="text-2xl">{team.teamID}</h1>
                                        <h2 className="text-lg text-gray-500">{team.teamLvl}</h2>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
