import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe('Button component', () => {
    it('should match the snapshot', () => {
        const handleButtonClick = jest.fn();
        const { container } = render(<Button className="button" type="button" label="Click Me" handleButtonClick={handleButtonClick} />);
        expect(container).toMatchSnapshot();
    });

});