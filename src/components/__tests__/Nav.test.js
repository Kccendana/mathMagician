import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../Nav"; // Adjust the path

describe('Nav component', () => {
    it('should match the snapshot', () => {
        const { container } = render(
          <BrowserRouter>
            <Nav />
          </BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});