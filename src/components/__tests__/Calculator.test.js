import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calculator from "../calculator";

describe('Calculator component', () => {
    it('should match the snapshot', () => {
        const {container } = render(<Calculator />);
        expect(container).toMatchSnapshot();
    });
})