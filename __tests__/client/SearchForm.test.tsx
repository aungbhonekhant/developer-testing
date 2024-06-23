import {render} from "@testing-library/react";
import {screen} from "@testing-library/dom"
import { SearchForm } from "../../components/SearchForm"
import React from "react";
import userEvent from '@testing-library/user-event'

const mockSetFilter = jest.fn();

describe("Search Form component", () => {
    describe("Render", () => {
        // search input
        it('should have search input label', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("search-input-label");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        it('should have search input', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("search-input");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        //type select dropdown
        it('should have type select label', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("type-select-label");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        it('should have type select', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("type-select");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        //type area-from
        it('should have area-from label', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("area-from-label");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        it('should have area-from', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("area-from");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        //type area-to
        it('should have area-to label', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("area-to-label");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        it('should have area-to', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("area-to");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        //type min price input
        it('should have min price label', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("min-price-label");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        it('should have min price', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("min-price");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        //type max price input
        it('should have max price label', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("max-price-label");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        it('should have max price', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("max-price");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        //type bed room count input
        it('should have bed room count label', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("bed-rooms-label");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        it('should have bed room count', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("bed-rooms");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        // submit btn
        it('should have submit button', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("submit-btn");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })

        // clear btn
        it('should have clear button', () => {
            // arrange
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const myElem = screen.getByTestId("clear-btn");

            // ASSERT
            expect(myElem).toBeInTheDocument()
        })
    })
    describe("Behavior", () => {
        // submit btn click
        it('should call setFilter on submit', async () => {
            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const button = screen.getByTestId("submit-btn");
            await userEvent.click(button)

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })

        // clear btn click
        it('should call setFilter on clear btn click', async () => {
            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const button = screen.getByTestId("clear-btn");
            await userEvent.click(button)

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })

        // search input on change
        it('should call setFilter on search input change', async () => {
            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const searchInput = screen.getByTestId("search-input");
            await userEvent.type(searchInput, "hello")

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })

        // area from on change
        it('should call setFilter on area from change', async () => {

            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const selectOption = screen.getByTestId('area-from');
            await userEvent.type(selectOption, "20");

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })

        // area to on change
        it('should call setFilter on area to change', async () => {

            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const selectOption = screen.getByTestId('area-to');
            await userEvent.type(selectOption, "20");

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })

        // min price on change
        it('should call setFilter on min price change', async () => {

            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const selectOption = screen.getByTestId('min-price');
            await userEvent.type(selectOption, "20");

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })

        // max price on change
        it('should call setFilter on max price change', async () => {

            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const selectOption = screen.getByTestId('max-price');
            await userEvent.type(selectOption, "20");

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })

        // ned rooms count on change
        it('should call setFilter on max price change', async () => {

            // ARRANGE
            render(<SearchForm setFilter={mockSetFilter} />)

            // ACT
            const selectOption = screen.getByTestId('bed-rooms');
            await userEvent.type(selectOption, "2");

            // ASSERT
            expect(mockSetFilter).toBeCalled()
        })
    })
})