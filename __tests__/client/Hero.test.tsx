import {render} from "@testing-library/react";
import {screen} from "@testing-library/dom"
import { Hero } from "../../components/Hero";
import React from "react";

const mockSetFilter = jest.fn()

describe("Hero component", () => {
    it('should have title text', () => {
        // arrange
        render(<Hero setFilter={mockSetFilter} />)

        // ACT
        const myElem = screen.getByText("Thailand's Home for Real Estate")

        // ASSERT
        expect(myElem).toBeInTheDocument()
    })

    it('should have filter form component', () => {
        // arrange
        render(<Hero setFilter={mockSetFilter} />)

        // ACT
        const myElem = screen.getByTestId("filter-form");

        // ASSERT
        expect(myElem).toBeInTheDocument()
    })
})