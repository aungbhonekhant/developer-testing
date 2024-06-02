"use client";
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

//{title, href}[]
const navList: any[] = [
 
]
export const Navigation = () => {
    return (
        <nav className="fixed w-screen px-4 top-2 z-50">
            <div className="py-3 container flex items-center justify-between bg-background rounded-md z-50">
                <p className="font-semibold italic">Faz Waz</p>
                <ul className="flex items-center gap-4">
                    {
                    navList.length > 0 && navList.map(nav => (
                        <li key={nav.title}>
                            <Link className="text-muted-foreground hover:text-primary hover:underline" href={nav.href}>
                                {nav.title}
                            </Link>
                        </li>
                    )) 
                    }
                </ul>
                <div>
                    <Avatar>
                        <AvatarImage src=""/>
                        <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    )
}