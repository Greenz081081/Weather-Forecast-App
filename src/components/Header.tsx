import Link from "next/link";

export default function Header() {
    return (
        <div className="header w-full bg-header">
            <nav className="md:flex p-5 md:justify-between w-auto">
                <div className="flex justify-between items-center cursor-pointer">
                <Link href="/" className="cursor-pointer">
                <span className="md:text-3xl text-2xl font-thin
                ">
                    Emerald&apos;s Weather Forecast
                </span>
                </Link>

                </div>
                <ul className="md:flex md:items-center md:z-auto w-full left-0 md:w-auto 
                md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500">
                    <li className="text-lg mx-4"><Link href="/" className="cursor-pointer">Home</Link></li>
                    <li className="text-lg mx-4"><Link href="/Forecast" className="cursor-pointer">Forecast</Link></li>
                    <li className="text-lg mx-4"><Link href="/OneDayPage" className="cursor-pointer">One Day Forecast</Link></li>
                    <li className="text-lg mx-4"><Link href="/ThreeDaysPage" className="cursor-pointer">Hourly Forecast</Link></li>
                    <li className="text-green-500 text-lg mx-4"><Link href="/MapPage" className="cursor-pointer">Weekly Forecast</Link></li>
                </ul>
            </nav>
        </div>
    )
}