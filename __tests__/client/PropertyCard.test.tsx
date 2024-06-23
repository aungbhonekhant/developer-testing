import React from 'react';
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import { PropertyCard } from '@/components/PropertyCard';

enum Type {
    SELL = 'SELL',
    RENT = 'RENT'
  }

const mockProperty = {
    "id": "00087f9c-598d-4738-937c-1be18924bd7d",
    "project": "civitas allatus attonbitus",
    "title": "pel pariatur impedit terreo voluptatem",
    "desc": "Cultura ulciscor compello saepe titulus amoveo demoror bos.\nAcceptus vero voluptates speciosus currus deprimo cruciamentum versus cervus adflicto.\nDecretum creber cupiditate.\nTenetur cura tonsor suscipit.\nSolum quas caput nam celo.\nCorpus tametsi verbera ocer uterque audeo reiciendis.\nPatruus credo carus cura cras testimonium stillicidium.\nVarius commemoro amor arbor spes patria quasi pecco vereor.\nAmicitia video adstringo aurum.\nVociferor tener dolorem video tutis temeritas patrocinor.",
    "price": 246527,
    "beds": 3,
    "baths": 2,
    "rate": 4,
    "area": 212,
    "thumbnail": "https://loremflickr.com/600/600/house?lock=962777768263680",
    "type": "SELL" as Type,
    "gallery": [
        {
            "propertyId": "00087f9c-598d-4738-937c-1be18924bd7d",
            "id": "1325c98f-eb2b-45db-9c5c-bc50e5e25e93",
            "url": "https://loremflickr.com/600/600/house?lock=2887528132640768",
            "createdAt": new Date("2024-03-06"),
            "updatedAt": new Date("2024-03-06"),
        },
        {
            "id": "573fa49a-b4f7-43a4-858c-0255afacf817",
            "propertyId": "00087f9c-598d-4738-937c-1be18924bd7d",
            "url": "https://loremflickr.com/600/600/house?lock=6563097063981056",
            "createdAt": new Date("2024-03-06"),
            "updatedAt": new Date("2024-03-06"),
        },
        {
            "id": "70dd73db-ff05-4976-a38d-060fccad5904",
            "propertyId": "00087f9c-598d-4738-937c-1be18924bd7d",
            "url": "https://loremflickr.com/600/600/house?lock=962777768263680",
            "createdAt": new Date("2024-03-06"),
            "updatedAt": new Date("2024-03-06"),
        },
        {
            "id": "a2673e0c-95f6-4e7d-8f7d-cb9810cb09d3",
            "propertyId": "00087f9c-598d-4738-937c-1be18924bd7d",
            "url": "https://loremflickr.com/600/600/house?lock=509283548528640",
            "createdAt": new Date("2024-03-06"),
            "updatedAt": new Date("2024-03-06"),
        },
        {
            "id": "afe06f82-0202-4a23-9500-2af6806935b7",
            "propertyId": "00087f9c-598d-4738-937c-1be18924bd7d",
            "url": "https://loremflickr.com/600/600/house?lock=1023047939129344",
            "createdAt": new Date("2024-03-06"),
            "updatedAt": new Date("2024-03-06"),
        }
    ],
    "createdAt": new Date("2024-03-06"),
    "updatedAt": new Date("2024-03-06"),
}

describe("Property Card component", () => {
    describe("Render", () => {
        it('should render an item', () => {
            // ARRANGE
            render(<PropertyCard {...mockProperty} />) 

            //ACT
            const item = screen.getByTestId('property-item')

            // ASSERT
            expect(item).toBeInTheDocument()
        })

        it('should render with correct project text', () => {
            // ARRANGE
            render(<PropertyCard {...mockProperty} />) 

            //ACT
            const item = screen.getByTestId('project')

            // ASSERT
            expect(item).toHaveTextContent(mockProperty.project)
        })

        it('should render with correct project text', () => {
            // ARRANGE
            render(<PropertyCard {...mockProperty} />) 

            //ACT
            const item = screen.getByTestId('type')

            // ASSERT
            expect(item).toHaveTextContent(mockProperty.type)
        })

        it('should render with correct area text', () => {
            // ARRANGE
            render(<PropertyCard {...mockProperty} />) 

            //ACT
            const item = screen.getByTestId('area')

            // ASSERT
            expect(item).toHaveTextContent(mockProperty.area.toString())
        })

        it('should render with correct beds text', () => {
            // ARRANGE
            render(<PropertyCard {...mockProperty} />) 

            //ACT
            const item = screen.getByTestId('beds')

            // ASSERT
            expect(item).toHaveTextContent(mockProperty.beds.toString())
        })

        it('should render with correct baths text', () => {
            // ARRANGE
            render(<PropertyCard {...mockProperty} />) 

            //ACT
            const item = screen.getByTestId('baths')

            // ASSERT
            expect(item).toHaveTextContent(mockProperty.baths.toString())
        })

        it('should render with correct price text', () => {
            // ARRANGE
            render(<PropertyCard {...mockProperty} />) 

            //ACT
            const item = screen.getByTestId('price')

            // ASSERT
            expect(item).toHaveTextContent(mockProperty.price.toString())
        })
    })
})