import TemplateLayout from '../main_layout';
import TeamPhoto from '../../media/images/team-2021-crop.jpg'
import CraigY from '../../media/images/craig_y.png'
import DougB from '../../media/images/doug_b.jpg'
import LynfieldLogo from '../../media/images/lynfield_college_logo.jpg'


const whoAreWePara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque tincidunt mauris vel mollis. Vestibulum vel commodo ligula. Integer quis sem id ex pretium commodo nec vitae elit. Donec suscipit dui tincidunt felis fringilla, id viverra tortor pulvinar. Aliquam aliquam tellus ex, id tristique elit eleifend eu. Nam nec lectus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam urna metus, luctus in molestie non, ultricies id metus. Phasellus orci ex, finibus nec congue ut, finibus sed est. Curabitur metus lacus, sodales sed viverra id, tempor quis arcu. Donec ipsum metus, varius convallis tortor semper, congue euismod nibh. Sed ac metus a sapien ullamcorper accumsan. "
const whatWeDoPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque tincidunt mauris vel mollis. Vestibulum vel commodo ligula. Integer quis sem id ex pretium commodo nec vitae elit. Donec suscipit dui tincidunt felis fringilla, id viverra tortor pulvinar. Aliquam aliquam tellus ex, id tristique elit eleifend eu. Nam nec lectus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam urna metus, luctus in molestie non, ultricies id metus. Phasellus orci ex, finibus nec congue ut, finibus sed est. Curabitur metus lacus, sodales sed viverra id, tempor quis arcu. Donec ipsum metus, varius convallis tortor semper, congue euismod nibh. Sed ac metus a sapien ullamcorper accumsan. "
const schoolPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque tincidunt mauris vel mollis. Vestibulum vel commodo ligula. Integer quis sem id ex pretium commodo nec vitae elit. Donec suscipit dui tincidunt felis fringilla, id viverra tortor pulvinar. Aliquam aliquam tellus ex, id tristique elit eleifend eu. Nam nec lectus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam urna metus, luctus in molestie non, ultricies id metus. Phasellus orci ex, finibus nec congue ut, finibus sed est. Curabitur metus lacus, sodales sed viverra id, tempor quis arcu. Donec ipsum metus, varius convallis tortor semper, congue euismod nibh. Sed ac metus a sapien ullamcorper accumsan. "

const whatWeDoBtnLink = "/vex"

function MentorCard(props) {
    return(
        <>
            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={props.imgSrc} alt={props.imgAlt}/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.name}</h5>
                    <p className="mb-3 font-normal text-gray-700">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default function About() {
    return (
       <>
        <TemplateLayout title="About Us" tagline="Tagline because taglines are nice">
            <div className="">
                <h1 className="text-5xl font-light">Who are we?</h1>
                <p className="my-10">{whoAreWePara}</p>
                <img src={TeamPhoto} alt="Lynfield College Robotics 2915 as of 2021" className="lg:w-1/2"/>
            </div>
            <div className="">
                <h1 className="text-5xl font-light my-16">What do we do?</h1>
                <p className="mb-10">{whatWeDoPara}</p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-200">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        <a href={whatWeDoBtnLink}>Learn More</a>
                    </span>
                </button>
            </div>
            <div className="">
                <h1 className="text-5xl font-light my-16">Our Mentors</h1>
                <div className="grid gap-10 md:grid-flow-col">
                    <MentorCard name="Craig Yearbury" imgSrc={CraigY} imgAlt="Craig Yearbury" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque tincidunt mauris vel mollis. Vestibulum vel commodo ligula. Integer quis sem id ex pretium commodo nec vitae elit."/>
                    <MentorCard name="Doug Bryan" imgSrc={DougB} imgAlt="Doug Bryan" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque tincidunt mauris vel mollis. Vestibulum vel commodo ligula. Integer quis sem id ex pretium commodo nec vitae elit."/>
                </div>
            </div>
            <div className="">
                <h1 className="text-5xl font-light my-16">Lynfield College</h1>
                <div className="grid md:grid-flow-col gap-6 items-center justify-items-center">
                    <p className="">{schoolPara}</p>
                    <img src={LynfieldLogo} alt="Lynfield College Logo" className="rounded-full shadow"/>
                </div>
            </div>
        </TemplateLayout>
       </>
    )
}