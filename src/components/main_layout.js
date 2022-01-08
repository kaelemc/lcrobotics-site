export default function TemplateLayout(props) {
    return(
        <>
        {/* header */}
        <div className="h-[35vh] flex justify-center items-center flex-col">
            <h1 className="font-semibold text-5xl pt-16 text-gray-900">{props.title}</h1>
            <p className="text-lg text-gray-700">{props.tagline}</p>
        </div>
        {/* content section */}
        <main className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-0 py-32">
                {props.children}
            </div>
        </main>
        </>
    )
}