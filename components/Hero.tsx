"use client";
import { SearchForm } from "./SearchForm"
import Image from "next/image";

type Props = {
    setFilter: Function
}
export const Hero = ({setFilter}: Props) => {
    return (
        <div className="min-h-screen flex justify-center items-center">
                <Image 
                    src="/home.jpeg"
                    fill
                    alt="Hero section background image"
                    objectFit="cover"
                    loading="lazy"
                    className="-z-10"
                />
            <div className="max-w-6xl flex flex-col gap-6 items-center pb-10 p-2">
                <div className="max-w-4xl space-y-5">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">Thailand's Home for Real Estate</h1>
                    <p className="text-slate-300 text-center">The leading real estate marketplace to buy, rent and sell property in Thailand</p>
                </div>
                {/* filter form here */}
                <SearchForm setFilter={setFilter}/>
            </div>
        </div>
    )
}