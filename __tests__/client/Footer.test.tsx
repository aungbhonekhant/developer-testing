import React from 'react';
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import { Footer } from '../../components/Footer';

it("should render with copyrights text", () => {
    // ARRANGE
    render(<Footer />)

    // ACT
    const myElem = screen.getByText("Copyrights © 2024, FazWaz Group")

    // ASSERT
    expect(myElem).toBeInTheDocument()
})