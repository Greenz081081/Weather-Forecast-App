import Image from "next/image"
import Link from "next/link"
export default function Hero() {
    return (
        <section>
            <div className="bg-cover hg-100% relative" style={{ 
                backgroundImage: `url("/images/sunny.jpg")`, 
            }}>
                <div className="md:grid md:grid-cols-6 flex flex-col p-2 h-auto gap-2">
                    <div className="md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-6 p-10 rounded-3xl 
                    text-background shadow-lg shadow-black border border-background font-thin">
                    <p>If you want to see the sunshine, you have to weather the storm.</p>
                    <p>Sunshine is delicious, rain is refreshing, wind braces us up, snow </p>
                    <p>is exhilarating; there is really no such thing as bad weather, only</p>
                    <p>different kinds of good weather. Wherever you go, no matter what the</p>
                    <p>weather, always bring your own sunshine.</p>
                    </div>
                    <div className="md:col-start-5 md:col-end-6 md:mt-0 mt-8 md:mb-0 mb-16 md:ml-40 
                        md:row-start-4 md:row-end-5">
                       <button className="absolute text-background border border-background p-2 
                       rounded-sm hover:bg-highlight hover:-translate-y-1 hover:scale-110 
                       duration-300 w-40 shadow-lg shadow-black" typeof="submit"><Link href={'/Forecast'}>Forecast</Link></button>
                    </div>
                </div>
            </div>
            <div className="text-center bg-opacity-2 grid grid-cols-3 md:grid-cols-6 p-2 h-full gap-2">
                <div className="col-start-1 col-end-4 row-start-1 mt-8 row-end-2 md:mt-4 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2">
                <Image
                width={400}
                height={200}
                src="/images/hero.jpg"
                alt="hero img"
                className="mb-4 items-center shadow-xl rounded-lg shadow-black"/>
                </div>
                <div className="col-start-1 col-end-4 row-start-2 row-end-3 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3">
                <Image
                width={400}
                height={600}
                src="/images/first-alert-weather-blue.jpg"
                alt="first alert img"
                className="mb-4 items-center shadow-xl rounded-lg shadow-black"/>
                </div>
                <div className="w-auto bg-background m-auto p-8 shadow-lg rounded-lg 
                shadow-black col-start-1 col-end-4 row-start-3 row-end-5 md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-3 ml-0 md:ml-10 text-left font-thin">
                <p>
                The climate crisis has been hard at work throughout 2023 so far, with extreme weather events 
                hitting headlines and costing lives and livelihoods all around the world. 
                We&apos;ve seen a record-breaking cyclone in south-eastern Africa, wildfires in Chile and Canada, 
                unbearable heatwaves across Asia, powerful ice storms in the southern United States, 
                and a lot more, highlighting what we all already know to be true: climate change is happening here and now. 
                What&apos;s more, things are slated to get worse. In the most recent report released by 
                the Intergovernmental Panel on Climate Change (IPCC), published in March, 
                environmental experts predict that at our current rate of collective 
                inaction against the climate crisis, the world could be facing a 1.5 
                degrees Celsius temperature rise by the beginning of the 2030s. 
                As such, extreme weather events would increase in frequency and strength. 
                &apos;Extreme heat events are more extreme than ever,&apos; Stephanie Herring, 
                scientist at the National Oceanographic and Atmospheric Administration (NOAA), told NPR. 
                &apos;Research is showing they&apos;re likely to become the new normal in the not so distant future.&apos;    
                </p> 
                </div>
            </div>
        </section>
    )
}

