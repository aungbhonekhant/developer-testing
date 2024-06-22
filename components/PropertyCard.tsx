"use client";
import { Bath, Bed, Square, StarIcon} from "lucide-react"
import Link from "next/link"
import { IProperty } from "./PropertyList";
import { Badge } from "./ui/badge";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

export const PropertyCard = ({id, project, title, desc, price, beds, baths, rate, area, thumbnail, type, gallery}: IProperty) => {
    const [loading, setLoading] = useState(true)
    return (

            <Dialog>
                <DialogTrigger data-testid="property-item" asChild>
                    <Link href="#">
                        <div className="border rounded-md overflow-hidden">
                            <div className="aspect-[16/10] overflow-hidden">
                                {loading && (
                                    <Skeleton className="h-[420px] w-[400px] rounded-xl" />
                                )}
                                <Image
                                    src={thumbnail} 
                                    alt={title} 
                                    height={420} 
                                    width={400} 
                                    loading="lazy"
                                    onLoad={()=>setLoading(false)}
                                    className="w-full transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 space-y-6">
                                <div>    
                                    <p className="text-lg font-semibold">{title}</p>
                                    <div className="flex">
                                        <p className="text-sm font-light" data-testid="project">{project}</p> <Badge data-testid="type" variant="outline">{type}</Badge>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 items-center divide-x border-border/50">
                                    <p data-testid="area" className="py-2 flex items-center gap-2 justify-center">
                                        <Square className="w-4 h-4"/>
                                        { area } sqft
                                    </p>
                                    <p data-testid="beds" className="py-2 flex items-center gap-2 justify-center">
                                        <Bed className="w-4 h-4"/>
                                        { beds } Beds
                                    </p>
                                    <p data-testid="baths" className="py-2 flex items-center gap-2 justify-center">
                                        <Bath className="w-4 h-4"/>
                                        { baths } Baths
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-muted-foreground">Price</p>
                                        <p data-testid="price" className="font-semibold">{ price } ฿</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Rating</p>
                                        <div className="flex gap-2 items-center">
                                            {Array(5).fill(0).map((_, index) => (
                                                <div key={index}>
                                                    <StarIcon fill={index < rate ? "orange" : "transparent"} color="orange" size={16}/>
                                                </div>
                                            ))
                                            
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </DialogTrigger>
                
                    {/* <DialogTrigger asChild>
                        <Button variant="outline">Share</Button>
                    </DialogTrigger> */}
                <DialogContent className="max-w-4xl sm:max-w-md md:max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>{project}</DialogTitle>
                        <DialogDescription>
                            <Carousel className="mx-10 mt-10">
                                <CarouselContent>
                                    {
                                        (gallery && gallery.length > 0) && gallery.map(gly => (
                                            <CarouselItem key={gly.id} className="flex items-center justify-center">
                                                <Image
                                                    src={gly.url ? gly.url : ""} 
                                                    alt={`${title}-${gly.id}`}  
                                                    width={500} height={520}
                                                    loading="lazy"
                                                    onLoad={()=>setLoading(false)}
                                                />
                                            </CarouselItem>
                                        ))
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start mt-5">
                        <h5 className="font-semibold">Description: </h5>
                        <p>{ desc }</p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
    )
}