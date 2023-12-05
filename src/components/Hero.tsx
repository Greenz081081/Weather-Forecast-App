import Image from "next/image"
import Link from "next/link"
export default function Hero() {
    return (
        <section>
            <div className="bg-cover h-full relative" style={{ 
                backgroundImage: `url("/images/sunny.jpg")`, 
            }}>
                <div className="grid grid-cols-6 p-8 h-full gap-2">
                    <div className="col-start-1 col-end-3 row-start-4 p-10 rounded-3xl 
                    text-background shadow-lg shadow-black row-end-5 border border-background font-thin">
                    <p>If you want to see the sunshine, you have to weather the storm.</p>
                    <p>Sunshine is delicious, rain is refreshing, wind braces us up, snow </p>
                    <p>is exhilarating; there is really no such thing as bad weather, only</p>
                    <p>different kinds of good weather. Wherever you go, no matter what the</p>
                    <p>weather, always bring your own sunshine.</p>
                    </div>
                    <div className="col-start-5 col-end-6 ml-40">
                       <button className="absolute text-background border border-background p-2 
                       rounded-sm hover:bg-highlight hover:-translate-y-1 hover:scale-110 
                       duration-300 w-40 shadow-lg shadow-black" typeof="submit"><Link href={'/Forecast'}>Forecast</Link></button>
                    </div>
                </div>
            </div>
            <div className="text-center bg-opacity-2 grid grid-cols-6 p-8 h-full gap-2">
                <div className="col-start-1 col-end-3 row-start-1 row-end-2">
                <Image
                width={400}
                height={200}
                src="/images/hero.jpg"
                alt="hero img"
                className="mb-4 items-center shadow-xl rounded-lg shadow-black"/>
                </div>
                <div className="col-start-1 col-end-3 row-start-2 row-end-3">
                <Image
                width={400}
                height={600}
                src="/images/first-alert-weather-blue.jpg"
                alt="first alert img"
                className="mb-4 items-center shadow-xl rounded-lg shadow-black"/>
                </div>
                <div className="w-auto bg-background m-auto p-8 shadow-lg rounded-lg 
                shadow-black col-start-3 col-end-6 row-start-1 row-end-3 ml-10 text-left font-thin">
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

