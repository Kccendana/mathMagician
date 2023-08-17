import React from "react";
import { render, waitFor } from "@testing-library/react";
import Quote from "../Quote";

describe('Quote component', () => {
    it('should match the snapshot', async() => {
        const { container } = render(<Quote />);

        await waitFor(() => {
            expect(container).toMatchSnapshot();
        })
    });

});
