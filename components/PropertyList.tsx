"use client";

import { useQuery } from "@apollo/client"
import { GET_PROPERTIES } from "@/graphql/queries"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Loader, MessageCircleWarning } from "lucide-react";

import { Property, Gallery} from "@prisma/client";
import { useState } from "react";

import dynamic from 'next/dynamic';
const PropertyCard = dynamic(()=>import("./PropertyCard").then(mod=>mod.PropertyCard))
const PaginationComponent = dynamic(()=>import("./Pagination"))

type Props = {
    filter: Object
}

export interface IProperty extends Property {
    gallery: Gallery []
}

export const PropertyList = ({filter}:Props) => {
    console.log("filter", filter);
    
    const [page, setPage] = useState<number>(1)
    
    const { data, loading, error } = useQuery(GET_PROPERTIES, {
        variables: {...filter, page: page, rowsPerPage: 24}
    })
    

    if(loading) {
        return (
            <div className="flex items-center">
                <Alert className="flex flex-col items-center">
                    <div className="mb-2">
                        <Loader className="h-10 w-10" />
                    </div>
                    <AlertTitle>Loading!</AlertTitle>
                    <AlertDescription>
                        Please wait.
                    </AlertDescription>
                </Alert>
            </div>
        )
    }

    if(error) {
        return (
            <div className="flex items-center">
                <Alert variant="destructive" className="flex flex-col items-center">
                    <div className="mb-2">
                        <MessageCircleWarning className="h-10 w-10" />
                    </div>
                    <AlertTitle>{ error.name }</AlertTitle>
                    <AlertDescription>
                        { error.message }
                    </AlertDescription>
                </Alert>
            </div>
        )
    }

    const properties = data.properties.data;
    
    return (
        <div id="properties-list" className="container">
            <h2 className="text-4xl text-center mt-5 mb-2">Available Properties</h2>
            <p className="text-center text-muted-foreground"></p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                {
                    properties.map((d: IProperty) => (
                        <PropertyCard key={d.id} {...d} />
                    ))
                }
                
            </div>
            <div className="w-full flex items-center justify-center my-6">
                <PaginationComponent
                    pageCount={data.properties.totalPages}
                    currentPage={page}
                    setPage={setPage}
                />
            </div>
            
        </div>
    )
}