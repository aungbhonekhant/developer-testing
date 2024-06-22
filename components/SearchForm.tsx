"use client";

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "./ui/select";
import { Button } from "./ui/button";

type FormValues = {
    search: string,
    area_from: string,
    area_to: string,
    type: string,
    min_price: string,
    max_price: string,
    beds: string
}

type Props = {
    setFilter: Function
}

const defaultValues ={
    search: "",
    area_from: "",
    area_to: "",
    type: "",
    min_price: "",
    max_price: "",
    beds: ""
}
export const SearchForm = ({setFilter}:Props) => {

    const form = useForm<FormValues>({
        defaultValues
    })

    // clear the from
    const handleFormClear = () => {
        form.reset(defaultValues)
    }

    const formSubmitHandler = (data: FormValues) => {
        
        //remove unnecessary fields from filter object
        const filteredObject = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => (value !== undefined) || (value !== ""))
        );
          
        setFilter(filteredObject)

        // scroll to properties list
        const formElement = document.getElementById('properties-list');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    } 

    return (
        <Form {...form}>
            <form data-testid="filter-form" className="p-5 w-full grid sm:grid-cols-2 lg:grid-cols-7 gap-3 items-end bg-background rounded" onSubmit={form.handleSubmit(formSubmitHandler)}>
                {/* search title or project */}
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel data-testid="search-input-label">Search</FormLabel>
                            <FormControl>
                                <Input data-testid="search-input" placeholder="Project name or keyword" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Sell or rent */}
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel data-testid="type-select-label">Type</FormLabel>
                            <FormControl>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger data-testid="type-select" className="w-full">
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="sell">Sell</SelectItem>
                                        <SelectItem value="rent">Rent</SelectItem>
                                    </SelectContent>
                            </Select>
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* min and max area */}
                <FormField
                    control={form.control}
                    name="area_from"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel data-testid="area-from-label">Min Area</FormLabel>
                            <FormControl>
                                <Input data-testid="area-from" type="number" placeholder="Min area" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="area_to"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel data-testid="area-to-label">Max Area</FormLabel>
                            <FormControl>
                                <Input data-testid="area-to" type="number" placeholder="Max area" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* min and max price range */}
                <FormField
                    control={form.control}
                    name="min_price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel data-testid="min-price-label">Min-Price</FormLabel>
                            <FormControl>
                                <Input data-testid="min-price" type="number" placeholder="Min-Price" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="max_price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel data-testid="max-price-label">Max-Price</FormLabel>
                            <FormControl>
                                <Input data-testid="max-price" type="number" placeholder="Max-Price" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* bed room count */}
                <FormField
                    control={form.control}
                    name="beds"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel data-testid="bed-rooms-label">Bed Rooms</FormLabel>
                            <FormControl>
                                <Input data-testid="bed-rooms" type="number" placeholder="Bed room count" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button data-testid="submit-btn" className="col-start-[1] col-end-[5]">Search</Button>
                <Button data-testid="clear-btn" className="col-start-[5] col-end-[-1]" onClick={handleFormClear}>Clear</Button>
            </form>
        </Form>
    )
}