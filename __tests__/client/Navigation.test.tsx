import React from 'react';
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import { Navigation } from '../../components/Navigation';

it("should render with copyrights text", () => {
    // ARRANGE
    render(<Navigation />)

    // ACT
    const myElem = screen.getByText("Faz Waz")

    // ASSERT
    expect(myElem).toBeInTheDocument()
})